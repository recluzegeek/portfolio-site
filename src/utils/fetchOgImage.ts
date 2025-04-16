
export async function fetchOgImage(url: string): Promise<string> {
  if (!url) return '/placeholder.svg';
  
  try {
    // Extract username and repo from GitHub URL
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return '/placeholder.svg';
    
    const [, username, repo] = match;
    
    // Try to get the social preview image from GitHub
    const ogImage = `https://opengraph.githubassets.com/v1/${username}/${repo}`;
    
    // Fallback images based on project type
    const fallbackImages = {
      'deepscan-web': 'https://images.unsplash.com/photo-1633419461186-7d41ca960f82?q=80&w=800&auto=format&fit=crop',
      'deepscan-api': 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
      'default': '/placeholder.svg'
    };

    return ogImage || fallbackImages[repo as keyof typeof fallbackImages] || fallbackImages.default;
  } catch (error) {
    console.error('Error fetching OG image:', error);
    return '/placeholder.svg';
  }
}
