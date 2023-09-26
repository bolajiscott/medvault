import { Web3Storage } from "web3.storage";

function getAccessToken() {
  return process.env.WEB3TOKEN ?? "";
}

export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export async function uploadToweb3Storage(fileBuffer, metadata) {
  const client = makeStorageClient();
  const result = await client.put([fileBuffer], { metadata });
  return result.cid ?? null;
}

export async function retrieveRecord(cid) {
  if (!cid) {
    return null;
  }
  try {
    const response = await client.get(cid);
    if (response.ok) {
      const data = await response.text();
      console.log("Retrieved data:", data);
      return response;
    } else {
      console.error("Failed to retrieve data:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
}
