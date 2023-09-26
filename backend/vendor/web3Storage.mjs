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
