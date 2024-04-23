import type { ChainedCommands } from "@tiptap/core";
import type { MaterialSymbol } from "material-symbols";

export type ButtonGroup = {
    buttons: Button[];
}

export type Button = {
    icon: MaterialSymbol;
    action: () => ChainedCommands;
}