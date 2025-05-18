// Helper functions for formatting and manipulating data

export const formatTime = (timeString?: string) => {
  if (!timeString || !timeString.includes(":")) return "N/A";
  const [hours, minutes] = timeString.split(":").map(Number);
  if (isNaN(hours) || isNaN(minutes)) return "N/A";

  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(0, 0, 0, hours, minutes));
  } catch (e) {
    return "N/A";
  }
};


export const formatDate = (dateString?: string) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "N/A";

  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  } catch (e) {
    return "N/A";
  }
};

export const formatBDT = (amount?: string) => {
  if (!amount) return "0";
  return parseFloat(amount).toLocaleString();
};
export const getDuration = (startTime: string, endTime: string) => {
  if (!startTime || !endTime) return "";

  const start = new Date(`1970-01-01T${startTime}Z`).getTime();
  const end = new Date(`1970-01-01T${endTime}Z`).getTime();

  let durationMs = end - start;

  // If end time is smaller than start time, assume the trip spans over midnight
  if (durationMs < 0) {
    durationMs += 24 * 60 * 60 * 1000; // Add 24 hours
  }

  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};


export const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; Secure; SameSite=Lax`;
};
export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Lax`;
};



