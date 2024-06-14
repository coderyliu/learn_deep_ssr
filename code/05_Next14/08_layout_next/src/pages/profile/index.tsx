import React, { memo } from "react";
import Layout from "@/components/layout";
import NestLayout from "@/components/nest-layout";

interface IStaticProps {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
}

interface IProps {
  children?: React.ReactElement;
}

// eslint-disable-next-line react/display-name
const Profile: React.FC<IProps> & IStaticProps = memo((props) => {
  // const { children } = props;
  return <div>Profile</div>;
});

export default Profile;
Profile.displayName = "Profile";
Profile.getLayout = (page: React.ReactElement) => {
  return (
    <Layout>
      <NestLayout>{page}</NestLayout>
    </Layout>
  );
};
