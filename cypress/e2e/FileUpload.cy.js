import "cypress-file-upload";
describe("File Uploads", () => {
  it(" sigle page file upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("resume.pdf");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it(" sigle page file upload  rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "resume.pdf",
      filename: "myfile.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it(" sigle page file upload  drag and drop ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("resume.pdf", {
      subjectType: "drag-n-drop",
    });

    cy.wait(5000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("resume.pdf");
  });
  it("upload multiple file", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["resume.pdf", "cover_letter.pdf"]);
    cy.wait(5000);
    cy.get(":nth-child(6) > strong").should(
      "contain.text",
      "Files You Selected:"
    );
  });
  it.only("upload files by shadow dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "resume.pdf"
    );
    cy.wait(5000);
    cy.get(".smart-item-name", { includeShadowDom: true }).contains(
      "resume.pdf"
    );
  });
});
