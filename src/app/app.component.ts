import { Component } from "@angular/core";
import { DiffEditorModel } from "ngx-monaco-editor";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  originalText: any;
  changedText: any;
  differenceText: any;
  editorOptions = {theme: 'vs', language: 'text/plain'};
  originalModel: DiffEditorModel = {
    code: "",
    language: "text/plain",
  };
  displayDiffChecker: boolean = false;

  modifiedModel: DiffEditorModel = {
    code: "",
    language: "text/plain",
  };

  checkDifference() {
    this.originalModel = { ...this.originalModel, code: this.originalText };
    this.modifiedModel = { ...this.originalModel, code: this.changedText };
    this.displayDiffChecker = true;
  }

}
