componentDidMount() {
    window.setInterval(() => {
        this.state.items.forEach((item) => {
            item.updatedAt = Number(new Date());
            item.ready = faker.random.boolean();
        })
        this.setState({items: this.state.items });
    }, 1000);
}

_removeItem(id) {
    const newItems = this.state.items.filter((item) => item.id !== id);

    this.setState({ items: newItems });
}
