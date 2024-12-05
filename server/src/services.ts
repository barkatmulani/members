import members from "./members-data";

export function getMember(id: string) {
    return members.find(x => x.id === id);
}