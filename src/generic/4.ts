/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: string;
}

class Component<ComponentProps> {
  constructor(public props: ComponentProps) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
