const STORAGE_KEYS = {
  USERNAMES: 'swatch_usernames',
  PROFILES: 'swatch_profiles'
};

let usedUsernames = new Map();
let profileData = new Map();

// Initialize data from localStorage
if (typeof window !== 'undefined') {
  try {
    const storedUsernames = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERNAMES) || '{}');
    const storedProfiles = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROFILES) || '{}');
    
    usedUsernames = new Map(Object.entries(storedUsernames));
    profileData = new Map(Object.entries(storedProfiles));
  } catch (e) {
    console.error('Error loading stored data:', e);
  }
}

// Helper function to save data to localStorage
const saveToStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.USERNAMES, JSON.stringify(Object.fromEntries(usedUsernames)));
      localStorage.setItem(STORAGE_KEYS.PROFILES, JSON.stringify(Object.fromEntries(profileData)));
    } catch (e) {
      console.error('Error saving data to storage:', e);
    }
  }
};

export const generateUrl = (data, origin) => {
  let username = data.n.toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, '')
    .substring(0, 30);

  if (!username) {
    username = 'user';
  }

  let finalUsername = username;
  let counter = 1;

  while (usedUsernames.has(finalUsername)) {
    finalUsername = `${username}${counter}`;
    counter++;
  }

  usedUsernames.set(finalUsername, true);
  profileData.set(finalUsername, data);
  
  // Save changes to localStorage
  saveToStorage();
  
  return `${origin}/${finalUsername}`;
};

export const getProfileData = (username) => {
  return profileData.get(username);
};