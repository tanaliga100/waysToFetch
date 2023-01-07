const getUser = () => {
  fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) =>
    res.json()
  );
};

export default getUser;
