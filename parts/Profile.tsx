import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

import { Skeleton } from "@mui/material";

type ProfileDataTypes = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export default function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataTypes>();
  const [repos, setrepos] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/MoonDusk1996")
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://api.github.com/users/MoonDusk1996/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let test = data.map((stars: { stargazers_count: number }) => {
          stars.stargazers_count;
        });

        const sumWithInitial = test.reduce(
          (accumulator: number, currentValue: number) =>
            accumulator + currentValue,
          0
        );
        console.log(sumWithInitial);
      });
  }, []);

  return (
    <>
      <div className={styles.avatar}>
        {profileData?.avatar_url ? (
          <img
            style={{ borderRadius: "100px" }}
            src={profileData?.avatar_url}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        ) : (
          <Skeleton variant="circular" width={100} height={100} />
        )}
      </div>
      <div className={styles.name}>
        {profileData?.name ? (
          profileData.name
        ) : (
          <Skeleton variant="text" width={200} />
        )}
      </div>
      <div className={styles.bio}>
        {profileData?.bio ? (
          profileData.bio
        ) : (
          <Skeleton variant="text" width={200} />
        )}
      </div>
      <div className={styles.location}>
        {profileData?.location ? (
          profileData.location
        ) : (
          <Skeleton variant="text" width={200} />
        )}
      </div>
      <div className={styles.badges}>
        <img
          height={"20px"}
          className="GS"
          alt="GitHub User's stars"
          src="https://img.shields.io/github/stars/moondusk1996?label=Stars&style=social"
        ></img>
      </div>
    </>
  );
}
