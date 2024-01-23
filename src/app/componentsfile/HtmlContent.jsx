const HtmlContent = ({ data }) => {
  return <p dangerouslySetInnerHTML={{ __html: data }} />;
};
export default HtmlContent;
