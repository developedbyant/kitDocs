export type Action = "create"|"add"|"update"
export type ScriptInfo = {
    packageManager: string;
    projectName: string;
    dependencies: string[];
    action: "create" | "add" | "update";
    paths: {
        cwd: string;
        package: string;
    };
}