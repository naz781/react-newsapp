export default async function handler(request, response) {
    const secretToken = process.env.GNEWS_API_KEY;

    // 1. Get params from the React request
    const {
        endpoint = "top-headlines", // Default to headlines
        q = "",
        category = "general",
        lang = "en",
        page = "1",
        max = "8"
    } = request.query;

    // 2. Build the URL using URLSearchParams
    // CRITICAL FIX: GNews requires 'apikey', not 'token'
    const queryParams = new URLSearchParams({
        apikey: secretToken,
        lang: lang,
        max: max,
        page: page
    });

    // Handle Search vs Headlines logic
    if (q && q.trim() !== "") {
        queryParams.append("q", q);
    } else {
        queryParams.append("category", category);
    }

    // 3. Clean path and build final GNews URL
    const cleanEndpointPath = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const gNewsUrl = `https://gnews.io/api/v4/${cleanEndpointPath}?${queryParams.toString()}`;

    try {
        const gnewsResponse = await fetch(gNewsUrl);
        const data = await gnewsResponse.json();

        // If GNews sends an error, send it back to React so we can see it
        if (!gnewsResponse.ok) {
            console.error("GNews API Error:", data);
            return response.status(gnewsResponse.status).json(data);
        }

        return response.status(200).json(data);
    } catch (error) {
        console.error("Server Error:", error);
        return response.status(500).json({ error: "Failed to connect to GNews" });
    }
}