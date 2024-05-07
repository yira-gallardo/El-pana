import { createClient } from "contentful";

async function getPostBySlug(slug: string) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  } as any);

  const entry = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  return {
    props: {
      post: entry.items[0],
    },
  };
}

function renderNode(node: any) {
  switch (node.nodeType) {
    case "paragraph":
      return (
        <p key={node.data?.id || Math.random()}>
          {node.content.map((childNode: any, index: any) =>
            renderChildNode(childNode, index)
          )}
        </p>
      );
    // Add more cases to handle other node types as needed
    default:
      return null;
  }
}

function renderChildNode(childNode: any, index: any) {
  switch (childNode.nodeType) {
    case "text":
      return <span key={index}>{childNode.value}</span>;
    // Add more cases for different child node types if needed
    default:
      return null;
  }
}

function ContentfulRenderer({ content }: any) {
  // return <div>asd</div>;
  return <div>{content.map((node: any, index: any) => renderNode(node))}</div>;
}

export default async function Home({ params }: { params: { slug: string } }) {
  const data = await getPostBySlug(params.slug);

  const content = (data.props.post as any).fields.content?.content || [];
  const video =
    (data.props.post as any).fields.video.content[0].content[0].value || [];

  return (
    <main>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full mx-auto">
          {/* dangerously html based on data.props.post.video */}
          {/* ts-ignore */}
          <div
            dangerouslySetInnerHTML={{
              __html: video,
            }}
          ></div>
          <h1 className="text-yellow-400 text-4xl font-bold mt-8">
            {String(data.props?.post?.fields?.title)}
          </h1>
          <h2 className="text-yellow-400 text-lg font-semibold mb-8">
            {String(data.props.post.fields.subtitle)}
          </h2>
          <ContentfulRenderer content={content} />
        </div>
      </div>
    </main>
  );
}
