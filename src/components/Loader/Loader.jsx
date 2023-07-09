import { Grid } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Grid
      height="80"
      width="80"
      color="rgb(214, 227, 75)"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
