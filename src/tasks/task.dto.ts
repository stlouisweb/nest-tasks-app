export class CreateTaskDto {
  readonly tite: String;
  readonly description: String;
  readonly order: Number;
  readonly complete: Boolean;
}

export class UpdateTaskDto {
  tite: String;
  description: String;
  order: Number;
  complete: Boolean;
}
