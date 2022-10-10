import { defineStore } from "pinia";
import type { Game, Meta } from "./types";
import { getMetaUrl } from "./utils";

export const useAppStore = defineStore("app", {
  state: () => ({
    screen: "home",
    meta: null as Meta | null,
    selectedGame: null as Game | null,
  }),
  actions: {
    async loadMeta() {
      const result = await fetch(getMetaUrl());
      this.meta = await result.json();
    },
    selectGame(id: string) {
      console.debug(`[STORE]: selectGame(id: ${id})`);

      if (!this.meta) {
        console.debug(`[STORE]: no meta, goToHome()`);

        this.goToHome();
        return;
      }

      const game = this.meta.games.find((game) => game.id === id);

      if (!game) {
        console.error(`[STORE]: no gamed '${id}' found`);
        throw `Игры с id '${id}' не найдено!`;
      }

      this.selectedGame = game;
      this.screen = id;
    },
    goToHome() {
      this.selectedGame = null;
      this.screen = "home";
    },
  },
});
