
export interface FetchRecommendationsParams {
  country: string;
  major: string;
  university: string;
}

export async function fetchRecommendations({
  country,
  major,
  university,
}: FetchRecommendationsParams): Promise<string[] | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const query = new URLSearchParams({ country, major, univ: university }).toString();

  try {
    const response = await fetch(`${baseUrl}/search?${query}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.schools;
  } catch (error) {
    console.error("Failed to fetch recommendations:", error);
    return null;
  }
}
