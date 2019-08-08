export class Todo {

  private title = '';

  private completed = false;

  constructor(title: string) {
    this.title = title || '';
  }

  get done(): boolean {
    return this.completed;
  }

  getTitle(): string {
    return this.title;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }
}
