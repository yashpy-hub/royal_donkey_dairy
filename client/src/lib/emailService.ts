import emailjs from "@emailjs/browser";

// Central business config (addresses, emails, etc.)
import { BUSINESS } from "@shared/business";

// EmailJS Configuration - Client Side Only
const SERVICE_ID = "service_janddhl";
const TEMPLATE_ID = "template_xi3zd4c";
const PUBLIC_KEY = "Ghzb7FbKl2QdBXLi8";

// All active business mailboxes (primary + secondary). Every form submission is
// delivered to all of them so nothing is missed.
const ALL_EMAILS = BUSINESS.emails.all.join(", ");
const PRIMARY_EMAIL = BUSINESS.emails.primary;

// Initialize EmailJS with public key only
emailjs.init({
  publicKey: PUBLIC_KEY,
});

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  businessType?: string;
  productInterest?: string;
}

/**
 * Send contact form email via EmailJS
 * Sends to primary email: info@rudradairyandfarm.shop
 */
export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: ALL_EMAILS,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      business_type: data.businessType || "Not specified",
      product_interest: data.productInterest || "Not specified",
      website: "rudradairyandfarm.shop",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};

/**
 * Send inquiry email for product samples
 */
export const sendSampleRequestEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  productType: string;
  quantity: string;
  message: string;
}): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: ALL_EMAILS,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: `Sample Request - ${data.productType}`,
      message: `Company: ${data.company}\nProduct: ${data.productType}\nQuantity: ${data.quantity}\n\nMessage: ${data.message}`,
      business_type: "Sample Request",
      product_interest: data.productType,
      website: "rudradairyandfarm.shop",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log("Sample request email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send sample request email:", error);
    return false;
  }
};

/**
 * Send bulk order inquiry email
 */
export const sendBulkOrderEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  productType: string;
  quantity: string;
  deliveryTimeline: string;
  specialRequirements: string;
}): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: ALL_EMAILS,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: `Bulk Order Inquiry - ${data.productType}`,
      message: `Company: ${data.company}\nProduct: ${data.productType}\nQuantity: ${data.quantity}\nDelivery Timeline: ${data.deliveryTimeline}\nSpecial Requirements: ${data.specialRequirements}`,
      business_type: "Bulk Order",
      product_interest: data.productType,
      website: "rudradairyandfarm.shop",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log("Bulk order email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send bulk order email:", error);
    return false;
  }
};

/**
 * Send a meeting-appointment request from the Appoint a Meeting page.
 * Delivered to all active business mailboxes.
 */
export const sendMeetingRequestEmail = async (data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  mode: string;
  purpose: string;
  message: string;
}): Promise<boolean> => {
  try {
    const modeLabel =
      data.mode === "in-person"
        ? "In-person (at office)"
        : data.mode === "video"
        ? "Video Call"
        : "Phone Call";
    const purposeLabel = data.purpose.toUpperCase();

    const templateParams = {
      to_email: ALL_EMAILS,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: `Meeting Request — ${data.name} (${purposeLabel})`,
      message: `Company: ${data.company || "Not specified"}\nMode: ${modeLabel}\nPreferred Date: ${data.date}\nPreferred Time: ${data.timeSlot}\nPurpose: ${purposeLabel}\n\nMessage: ${data.message}`,
      business_type: "Meeting Request",
      product_interest: purposeLabel,
      website: "rudradairyandfarm.shop",
      timestamp: new Date().toLocaleString("en-IN"),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log("Meeting request email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send meeting request email:", error);
    return false;
  }
};

export default {
  sendContactEmail,
  sendSampleRequestEmail,
  sendBulkOrderEmail,
  sendMeetingRequestEmail,
  PRIMARY_EMAIL,
};
