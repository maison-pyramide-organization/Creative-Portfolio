import client from "../contentful/client";

const getProjects = async () => {
  const res = await client.getEntries({ content_type: "project" });
  return res.items;
};

export default getProjects;
