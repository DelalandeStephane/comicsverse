

     class Powerstats {
        intelligence!: string;
        strength!: string;
        speed!: string;
        durability!: string;
        power!: string;
        combat!: string;
    }

     class Biography {
        'full-name'!: string;
        'alter-egos'!: string;
        aliases!: string[];
        'place-of-birth'!: string;
        'first-appearance'!: string;
        publisher!: string;
        alignment!: string;
    }

     class Appearance {
        gender!: string;
        race!: string;
        height!: string[];
        weight!: string[];
        'eye-color'!: string;
        'hair-color'!: string;
    }

     class Work {
        occupation!: string;
        base!: string;
    }

     class Connections {
        'group-affiliation'!: string;
        relatives!: string;
    }

     class Image {
        url!: string;
    }

    export class SuperHero {
        id!: string;
        name!: string;
        powerstats!: Powerstats;
        biography!: Biography;
        appearance!: Appearance;
        work!: Work;
        connections!: Connections;
        image!: Image;
    }
