import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AdmissionData {
  fullName: string;
  class: string;
  board: string;
  contactNumber: string;
  email: string;
  address: string;
  subjects: string;
  googleSheetUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const admissionData: AdmissionData = await req.json();
    console.log("Received admission data:", admissionData);

    const { googleSheetUrl, ...formData } = admissionData;

    if (!googleSheetUrl) {
      console.error("Google Sheet URL is missing");
      return new Response(
        JSON.stringify({ error: "Google Sheet URL is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send data to Google Sheets
    const googleSheetsResponse = await fetch(googleSheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!googleSheetsResponse.ok) {
      const errorText = await googleSheetsResponse.text();
      console.error("Google Sheets error:", errorText);
      throw new Error(`Failed to submit to Google Sheets: ${errorText}`);
    }

    console.log("Successfully submitted to Google Sheets");

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Admission form submitted successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-admission function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
