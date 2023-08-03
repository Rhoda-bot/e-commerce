import Head from "next/head";
import { useRouter } from "next/router";

const Profile = () => {
    const router = useRouter();
    const profileId = router.query.profileId
    return(
        <>
        <Head>
      	    <title>Profile page</title>
        <meta name="description" content="You really need to read this website because it's made with Next.js" />
      </Head>
            <h3>Profile Page User  {profileId}</h3>
        </>
    )
}
export default Profile