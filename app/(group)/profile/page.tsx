import Avatar from "./Avatar";

const getProfile = async () => {
  const response = await fetch("https://url.com", { cache: "no-cache" });
  return response.json();
};

const Profile = async () => {
  const profile = await getProfile();
  return <Avatar src="https://avatars.githubusercontent.com/u/45297354?v=4" />;
};

export default Profile;
