
export async function fetchOgImage(url: string): Promise<string> {
  if (!url) return '/placeholder.svg';
  
  try {
    // Extract username and repo from GitHub URL
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return '/placeholder.svg';
    
    const [, username, repo] = match;
    
    // Try to get the social preview image from GitHub
    const ogImage = `https://opengraph.githubassets.com/v1/${username}/${repo}`;
    
    // Fallback images based on project type or using tech-appropriate images
    const fallbackImages: Record<string, string> = {
      'deepscan-web': 'https://images.unsplash.com/photo-1633419461186-7d41ca960f82?q=80&w=800&auto=format&fit=crop',
      'deepscan-api': 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
      'JKeylogger': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop',
      'AirLineReservationSystem': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
      'BlackAshFoodOrederingSystem': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop',
      'smart-vpn-proxy': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      'MiniMaxPythonGUI': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
      'deepscan-extension': 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
      'default': '/placeholder.svg'
    };

    return ogImage || fallbackImages[repo] || fallbackImages.default;
  } catch (error) {
    console.error('Error fetching OG image:', error);
    return '/placeholder.svg';
  }
}
