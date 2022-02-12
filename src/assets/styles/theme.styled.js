const theme = {
  light: {
    background1: "hsl(0, 0%, 90%)",
    background2: "hsl(0, 5%, 81%)",
    background3: "hsl(0, 0%, 93%)",
    toggleBackground: "hsl(25, 98%, 40%)",
    keyText: "hsl(221, 14%, 31%)",
    mainText: "hsl(60, 10%, 19%)",
    key: {
      digit: {
        background: "hsl(45, 7%, 89%)",
        shadow: "hsl(35, 11%, 61%)",
        fontSize: "1.5em",
      },
      action: {
        background: "hsl(185, 42%, 37%)",
        textColor: "#fff",
        shadow: "hsl(185, 58%, 25%)",
      },
      mainAction: {
        background: "hsl(25, 98%, 40%)",
        shadow: "hsl(25, 99%, 27%)",
        textColor: "#fff",
      },
    },
  },
  dark: {
    background1: "hsl(222, 26%, 31%)",
    background2: "hsl(223, 31%, 20%)",
    background3: "hsl(224, 36%, 15%)",
    toggleBackground: "hsl(6, 63%, 50%)",
    keyText: "hsl(221, 14%, 31%)",
    mainText: "#fff",
    key: {
      digit: {
        background: "hsl(30, 25%, 89%)",
        shadow: "hsl(28, 16%, 65%)",
        fontSize: "1.5em",
      },
      action: {
        background: "hsl(225, 21%, 49%)",
        textColor: "#fff",
        shadow: "hsl(224, 28%, 35%)",
      },
      mainAction: {
        background: "hsl(6, 63%, 50%)",
        shadow: "hsl(6, 70%, 34%)",
        textColor: "#fff",
      },
    },
  },
  alternate: {
    background1: "hsl(268, 75%, 9%)",
    background2: "hsl(268, 71%, 12%)",
    background3: "hsl(268, 71%, 12%)",
    toggleBackground: "hsl(176, 100%, 44%)",
    keyText: "hsl(52, 100%, 62%)",
    mainText: "hsl(52, 100%, 62%)",
    key: {
      digit: {
        background: "hsl(268, 47%, 21%)",
        shadow: "hsl(290, 70%, 36%)",
        fontSize: "1.5em",
      },
      action: {
        background: "hsl(281, 89%, 26%)",
        textColor: "#fff",
        shadow: "hsl(285, 91%, 52%)",
      },
      mainAction: {
        background: "hsl(176, 100%, 44%)",
        shadow: "hsl(177, 92%, 70%)",
        textColor: "hsl(198, 20%, 13%)",
      },
    },
  },
};

export const THEMES = ["light", "dark", "alternate"];

export default theme;
