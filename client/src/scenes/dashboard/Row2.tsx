import DashboardBox from "@/components/DashboardBox";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;
