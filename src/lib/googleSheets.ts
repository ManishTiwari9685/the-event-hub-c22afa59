// Google Sheets integration via Google Apps Script Web App
// You need to set up a Google Apps Script and deploy it as a web app

const GOOGLE_SCRIPT_URL = https://script.google.com/macros/s/AKfycbx1DXUTVyRqcFubozPX_ygvxsAxUdmuJRF20m_U5eEuwEJAJfyugYESdaqy-DWDNbs/exec; // Add your Google Apps Script URL here

export interface FormData {
  formType: string;
  timestamp: string;
  [key: string]: string;
}

export const submitToGoogleSheets = async (data: FormData): Promise<boolean> => {
  // If no Google Script URL is configured, simulate success
  if (!GOOGLE_SCRIPT_URL) {
    console.log('Form data (would be sent to Google Sheets):', data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};
