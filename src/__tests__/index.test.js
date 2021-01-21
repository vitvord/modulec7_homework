import { revertString } from "../index.js";

describe("tests revertString function", () => {
    it("reverse simple string ", () => expect(revertString("123abcd")).toBe("dcba321"));
    it("reverse long string", () => expect(
        revertString("JejucJuzisyisDivhatofVotAvIdLyidIfdojToskekImrawpEjivyeejboawlosdejWishpetwegTokjumsichiashDonOv0sleOkIdictigTacBojNepdobConHolk")).toBe("kloHnoCbodpeNjoBcaTgitcidIkOels0vOnoDhsaihcismujkoTgewtephsiWjedsolwaobjeeyvijEpwarmIkeksoTjodfIdiyLdIvAtoVfotahviDsiysizuJcujeJ"));
});
