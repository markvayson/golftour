import { Players } from "@/constants/data";
import { Client, Databases, ID, Query } from "react-native-appwrite";

const databaseID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const eventsSeriesId =
  process.env.EXPO_PUBLIC_APPWRITE_EVENTSERIES_COLLECTION_ID!;

const playersId = process.env.EXPO_PUBLIC_APPWRITE_PLAYERS_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform("com.mcpv.golftour");

const databases = new Databases(client);

export const getAllEvents = async () => {
  try {
    const response = await databases.listDocuments(
      databaseID,
      eventsSeriesId,
      []
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

Players.forEach(async (player) => {
  const existingPlayer = await databases.listDocuments(databaseID, playersId, [
    Query.equal("email", player.email),
  ]);

  if (existingPlayer.documents.length === 0) {
    await databases.createDocument(databaseID, playersId, ID.unique(), player);
    console.log(`Player ${player.name} added to Appwrite`);
  } else {
    console.log(`Player ${player.name} already exists in Appwrite`);
  }
});
