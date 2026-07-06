/** Each Webflow page has its own data-wf-page id on <html>, which the Webflow
 *  runtime uses to pick that page's interactions. The shared Next.js layout
 *  sets the homepage id, so other pages override it with this inline script —
 *  it runs during HTML parse, long before WebflowRuntime loads webflow.js. */
export default function WfPageId({ id }: { id: string }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.setAttribute("data-wf-page", ${JSON.stringify(id)});`,
      }}
    />
  );
}
