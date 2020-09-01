module.exports = class BaseCommand {
  constructor(name, category, aliases, usage, description) {
    this.name = name;
    this.category = category;
    this.aliases = aliases;
    this.usage = usage;
    this.description = description;
  }
}