import { loadPackageDefinition } from "@grpc/grpc-js";
import { load } from "@grpc/proto-loader";

const notesPackageDefinition = await load("./src/proto/notes.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
export const notesProto = loadPackageDefinition(notesPackageDefinition);
