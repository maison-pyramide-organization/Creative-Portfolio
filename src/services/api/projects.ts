import client from "../contentful/client";

const getProjects = async () => {
  const res = await client.getEntries({ content_type: "project" });
  const projects = res.items.map((proj) => proj.fields);
  return projects;
};

export default getProjects;
