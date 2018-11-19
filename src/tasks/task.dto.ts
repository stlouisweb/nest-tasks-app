export class CreateTaskDto {
  readonly title: String;
  readonly description: String;
  readonly order: Number;
  readonly complete: Boolean;
}

export class UpdateTaskDto {
  title: String;
  description: String;
  order: Number;
  complete: Boolean;
}
