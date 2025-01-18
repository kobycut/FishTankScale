
export class Fish {
    constructor(species, water_temp_min, water_temp_max, ph_min, ph_max, incompatible_with, size, min_tank_size, schooling, schooling_min,
        tank_position, special_message, water_hardness_min, water_hardness_max) {
        this.species = species
        this.water_temp_min = water_temp_min
        this.water_temp_max = water_temp_max
        this.ph_min = ph_min
        this.ph_max = ph_max
        this.incompatible_with = incompatible_with
        this.size = size
        this.min_tank_size = min_tank_size
        this.schooling = schooling
        this.schooling_min = schooling_min
        this.special_message = special_message
        this.tank_position = tank_position
        this.water_hardness_min = water_hardness_min
        this.water_hardness_max = water_hardness_max
    }
}

// export class Dwarf_Gourami {
//     constructor() {
//         this.species = 'Dwarf Gourami'
//         this.water_temp_min = 72
//         this.water_temp_max = 82
//         this.ph_min = 6
//         this.ph_max = 8
//         this.incompatible_with = ['Betta Male', 'Cherry Shrimp',]
//         this.size = 2.5
//         this.min_tank_size = 10
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = "CAUTION, Dwarf Gouramis should not be with other Dwarf Gouramis"
//         this.tank_position = "Top Dweller"
//         this.water_hardness_min = 5
//         this.water_hardness_max = 20
//     }
// }

// export class Betta_Male {
//     constructor() {
//         this.species = 'Betta Male'
//         this.water_temp_min = 76
//         this.water_temp_max = 85
//         this.ph_min = 6.8
//         this.ph_max = 7.5
//         this.incompatible_with = ['Cherry Shrimp']
//         this.size = 2.5
//         this.min_tank_size = 5
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = 'CAUTION, Male Bettas should not be with other Betta Males'
//         this.tank_position = "Top Dweller"
//         this.water_hardness_min = 5
//         this.water_hardness_max = 20
//     }
// }

// export class Betta_Female {
//     constructor() {
//         this.species = 'Betta Female'
//         this.water_temp_min = 76
//         this.water_temp_max = 85
//         this.ph_min = 6.8
//         this.ph_max = 7.5
//         this.incompatible_with = ['Dwarf Gourami', 'Cherry Shrimp']
//         this.size = 2.5
//         this.min_tank_size = 5
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = "Top Dweller"
//         this.water_hardness_min = 5
//         this.water_hardness_max = 20
//     }
// }

// export class Cherry_Shrimp {
//     constructor() {
//         this.species = 'Cherry Shrimp'
//         this.water_temp_min = 65
//         this.water_temp_max = 85
//         this.ph_min = 6.7
//         this.ph_max = 8.5
//         this.incompatible_with = []
//         this.size = 0.2
//         this.min_tank_size = 1
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = "Bottom Dweller"
//         this.water_hardness_min = 5
//         this.water_hardness_max = 15
//     }
// }

// export class Neon_Tetra {
//     constructor() {
//         this.species = 'Neon Tetra'
//         this.water_temp_min = 72
//         this.water_temp_max = 76
//         this.ph_min = 4
//         this.ph_max = 7.5
//         this.incompatible_with = []
//         this.size = 1.5
//         this.min_tank_size = 10
//         this.schooling = true
//         this.schooling_min = 6
//         this.special_message = null
//         this.tank_position = "Mid-Level Dweller"
//         this.water_hardness_min = 2
//         this.water_hardness_max = 10
//     }
// }
// export class Cardinal_Tetra {
//     constructor() {
//         this.species = 'Cardinal Tetra'
//         this.water_temp_min = 73
//         this.water_temp_max = 84
//         this.ph_min = 4
//         this.ph_max = 7.5
//         this.incompatible_with = []
//         this.size = 1.25
//         this.min_tank_size = 20
//         this.schooling = true
//         this.schooling_min = 6
//         this.special_message = null
//         this.tank_position = "Mid-Level Dweller"
//         this.water_hardness_min = 1
//         this.water_hardness_max = 10
//     }
// }
// export class African_Dwarf_Frog {
//     constructor() {
//         this.species = 'African Dwarf Frog'
//         this.water_temp_min = 68
//         this.water_temp_max = 82
//         this.ph_min = 6.5
//         this.ph_max = 7.8
//         this.incompatible_with = []
//         this.size = 3
//         this.min_tank_size = 15
//         this.schooling = true
//         this.schooling_min = 2
//         this.special_message = "CAUTION, African Dwarf Frogs need a tank with water depth of less than 18 inches because they go up for air"
//         this.tank_position = "Bottom Dweller"
//         this.water_hardness_min = 12
//         this.water_hardness_max = 15
//     }
// }

// export class Fancy_Guppy {
//     constructor() {
//         this.species = 'Fancy Guppy'
//         this.water_temp_min = 72
//         this.water_temp_max = 82
//         this.ph_min = 6.5
//         this.ph_max = 8.5
//         this.incompatible_with = []
//         this.size = 2.4
//         this.min_tank_size = 10
//         this.schooling = true
//         this.schooling_min = 6
//         this.special_message = null
//         this.tank_position = "Mid-Level Dweller"
//         this.water_hardness_min = 5
//         this.water_hardness_max = 15
//     }
// }

// export class Harlequin_Rasbora {
//     constructor() {
//         this.species = 'Harlequin Rasbora'
//         this.water_temp_min = 72
//         this.water_temp_max = 82
//         this.ph_min = 6
//         this.ph_max = 7.5
//         this.incompatible_with = []
//         this.size = 2
//         this.min_tank_size = 10
//         this.schooling = true
//         this.schooling_min = 6
//         this.special_message = null
//         this.tank_position = "Mid-Level Dweller"
//         this.water_hardness_min = 3
//         this.water_hardness_max = 10
//     }
// }

// export class Amano_Shrimp {
//     constructor() {
//         this.species = 'Amano Shrimp'
//         this.water_temp_min = 65
//         this.water_temp_max = 84
//         this.ph_min = 6.5
//         this.ph_max = 8
//         this.incompatible_with = []
//         this.size = 1.5
//         this.min_tank_size = 1
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = "Bottom Dweller"
//         this.water_hardness_min = 4
//         this.water_hardness_max = 15
//     }
// }

// export class Nerite_Snail {
//     constructor() {
//         this.species = 'Nerite Snail'
//         this.water_temp_min = 65
//         this.water_temp_max = 85
//         this.ph_min = 6.5
//         this.ph_max = 8.5
//         this.incompatible_with = []
//         this.size = 0.1
//         this.min_tank_size = 1
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = null
//         this.water_hardness_min = 6
//         this.water_hardness_max = 10
//     }
// }

// export class Black_Neon_Tetra {
//     constructor() {
//         this.species = 'Black Neon Tetra'
//         this.water_temp_min = 68
//         this.water_temp_max = 82
//         this.ph_min = 5.5
//         this.ph_max = 7
//         this.incompatible_with = []
//         this.size = 1
//         this.min_tank_size = 10
//         this.schooling = true
//         this.schooling_min = 6
//         this.special_message = null
//         this.tank_position = "Mid-Level Dweller"
//         this.water_hardness_min = 4
//         this.water_hardness_max = 8
//     }
// }

// export class Congo_Tetra {
//     constructor() {
//         this.species = 'Congo Tetra'
//         this.water_temp_min = 72
//         this.water_temp_max = 82
//         this.ph_min = 6
//         this.ph_max = 7.5
//         this.incompatible_with = []
//         this.size = 2.5
//         this.min_tank_size = 30
//         this.schooling = true
//         this.schooling_min = 6
//         this.special_message = null
//         this.tank_position = 'Mid-Level Dweller'
//         this.water_hardness_min = 4
//         this.water_hardness_max = 12
//     }
// }

// export class Ember_Tetra {
//     constructor() {
//         this.species = 'Ember Tetra'
//         this.water_temp_min = 73
//         this.water_temp_max = 84
//         this.ph_min = 5
//         this.ph_max = 8
//         this.incompatible_with = []
//         this.size = 0.6
//         this.min_tank_size = 10
//         this.schooling = true
//         this.schooling_min = 6
//         this.special_message = null
//         this.tank_position = 'Mid-Level Dweller'
//         this.water_hardness_min = 5
//         this.water_hardness_max = 17
//     }
// }

// export class Bamboo_Shrimp {
//     constructor() {
//         this.species = 'Bamboo Shrimp'
//         this.water_temp_min = 73
//         this.water_temp_max = 84
//         this.ph_min = 6.3
//         this.ph_max = 7.7
//         this.incompatible_with = []
//         this.size = 0.6
//         this.min_tank_size = 4
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = 'Bottom-Level Dweller'
//         this.water_hardness_min = 3
//         this.water_hardness_max = 11
//     }
// }

// export class Ghost_Shrimp {
//     constructor() {
//         this.species = 'Ghost Shrimp'
//         this.water_temp_min = 72
//         this.water_temp_max = 82
//         this.ph_min = 7
//         this.ph_max = 8
//         this.incompatible_with = []
//         this.size = 0.6
//         this.min_tank_size = 4
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = 'Bottom-Level Dweller'
//         this.water_hardness_min = 3
//         this.water_hardness_max = 15
//     }
// }

// export class Blue_Velvet_Shrimp {
//     constructor() {
//         this.species = 'Blue Velvet Shrimp'
//         this.water_temp_min = 62
//         this.water_temp_max = 80
//         this.ph_min = 6.5
//         this.ph_max = 7.8
//         this.incompatible_with = []
//         this.size = 0.6
//         this.min_tank_size = 4
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = 'Bottom-Level Dweller'
//         this.water_hardness_min = 2
//         this.water_hardness_max = 16
//     }
// }
// export class Crystal_Red_Shrimp {
//     constructor() {
//         this.species = 'Crystal Red Shrimp'
//         this.water_temp_min = 66
//         this.water_temp_max = 80
//         this.ph_min = 6
//         this.ph_max = 7.4
//         this.incompatible_with = []
//         this.size = 0.6
//         this.min_tank_size = 4
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = 'Bottom-Level Dweller'
//         this.water_hardness_min = 3
//         this.water_hardness_max = 7
//     }
// }
// export class Red_Rili_Shrimp {
//     constructor() {
//         this.species = 'Red Rili Shrimp'
//         this.water_temp_min = 70
//         this.water_temp_max = 81
//         this.ph_min = 6.3
//         this.ph_max = 7.7
//         this.incompatible_with = []
//         this.size = 0.2
//         this.min_tank_size = 4
//         this.schooling = true
//         this.schooling_min = 3
//         this.special_message = null
//         this.tank_position = 'Bottom-Level Dweller'
//         this.water_hardness_min = 3
//         this.water_hardness_max = 9
//     }
// }
// export class Tiger_Shrimp {
//     constructor() {
//         this.species = 'Tiger Shrimp'
//         this.water_temp_min = 66
//         this.water_temp_max = 80
//         this.ph_min = 6.3
//         this.ph_max = 8
//         this.incompatible_with = []
//         this.size = 0.2
//         this.min_tank_size = 4
//         this.schooling = false
//         this.schooling_min = 0
//         this.special_message = null
//         this.tank_position = 'Bottom-Level Dweller'
//         this.water_hardness_min = 4
//         this.water_hardness_max = 7
//     }
// }




// // export const fishData = {
// //     'Dwarf Gourami': {
// //         species: 'Dwarf Gourami',
// //         water_temp_min: 72,
// //         water_temp_max:  82,
// //         ph_min: 6,
// //         ph_max :  8,
// //         incompatible_with : ['Betta Male', 'Cherry Shrimp',],
// //         size : 2.5,
// //         min_tank_size : 10,
// //         schooling: false,
// //         schooling_min : 0,
// //         special_message : "CAUTION, Dwarf Gouramis should not be with other Dwarf Gouramis",
// //         tank_position :  "Top Dweller",
// //         water_hardness_min : 5,
// //         water_hardness_max :  20,
// //     }

// // }
export const fishData = {
    'Betta Male': {
        species: 'Betta Male',
        water_temp_min: 76,
        water_temp_max: 85,
        ph_min: 6.8,
        ph_max: 7.5,
        incompatible_with: ['Cherry Shrimp'],
        size: 2.5,
        min_tank_size: 5,
        schooling: false,
        schooling_min: 0,
        special_message: 'CAUTION, Male Bettas should not be with other Betta Males',
        tank_position: 'Top Dweller',
        water_hardness_min: 5,
        water_hardness_max: 20,
    },
    'Betta Female': {
        species: 'Betta Female',
        water_temp_min: 76,
        water_temp_max: 85,
        ph_min: 6.8,
        ph_max: 7.5,
        incompatible_with: ['Dwarf Gourami', 'Cherry Shrimp'],
        size: 2.5,
        min_tank_size: 5,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Top Dweller',
        water_hardness_min: 5,
        water_hardness_max: 20,
    },
    'Cherry Shrimp': {
        species: 'Cherry Shrimp',
        water_temp_min: 65,
        water_temp_max: 85,
        ph_min: 6.7,
        ph_max: 8.5,
        incompatible_with: [],
        size: 0.2,
        min_tank_size: 1,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Bottom Dweller',
        water_hardness_min: 5,
        water_hardness_max: 15,
    },
    'Neon Tetra': {
        species: 'Neon Tetra',
        water_temp_min: 72,
        water_temp_max: 76,
        ph_min: 4,
        ph_max: 7.5,
        incompatible_with: [],
        size: 1.5,
        min_tank_size: 10,
        schooling: true,
        schooling_min: 6,
        special_message: null,
        tank_position: 'Mid-Level Dweller',
        water_hardness_min: 2,
        water_hardness_max: 10,
    },
    'Cardinal Tetra': {
        species: 'Cardinal Tetra',
        water_temp_min: 73,
        water_temp_max: 84,
        ph_min: 4,
        ph_max: 7.5,
        incompatible_with: [],
        size: 1.25,
        min_tank_size: 20,
        schooling: true,
        schooling_min: 6,
        special_message: null,
        tank_position: 'Mid-Level Dweller',
        water_hardness_min: 1,
        water_hardness_max: 10,
    },
    'African Dwarf Frog': {
        species: 'African Dwarf Frog',
        water_temp_min: 68,
        water_temp_max: 82,
        ph_min: 6.5,
        ph_max: 7.8,
        incompatible_with: [],
        size: 3,
        min_tank_size: 15,
        schooling: true,
        schooling_min: 2,
        special_message: 'CAUTION, African Dwarf Frogs need a tank with water depth of less than 18 inches because they go up for air',
        tank_position: 'Bottom Dweller',
        water_hardness_min: 12,
        water_hardness_max: 15,
    },
    'Fancy Guppy': {
        species: 'Fancy Guppy',
        water_temp_min: 72,
        water_temp_max: 82,
        ph_min: 6.5,
        ph_max: 8.5,
        incompatible_with: [],
        size: 2.4,
        min_tank_size: 10,
        schooling: true,
        schooling_min: 6,
        special_message: null,
        tank_position: 'Mid-Level Dweller',
        water_hardness_min: 5,
        water_hardness_max: 15,
    },
    'Harlequin Rasbora': {
        species: 'Harlequin Rasbora',
        water_temp_min: 72,
        water_temp_max: 82,
        ph_min: 6,
        ph_max: 7.5,
        incompatible_with: [],
        size: 2,
        min_tank_size: 10,
        schooling: true,
        schooling_min: 6,
        special_message: null,
        tank_position: 'Mid-Level Dweller',
        water_hardness_min: 3,
        water_hardness_max: 10,
    },
    'Amano Shrimp': {
        species: 'Amano Shrimp',
        water_temp_min: 65,
        water_temp_max: 84,
        ph_min: 6.5,
        ph_max: 8,
        incompatible_with: [],
        size: 1.5,
        min_tank_size: 1,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Bottom Dweller',
        water_hardness_min: 4,
        water_hardness_max: 15,
    },
    'Nerite Snail': {
        species: 'Nerite Snail',
        water_temp_min: 65,
        water_temp_max: 85,
        ph_min: 6.5,
        ph_max: 8.5,
        incompatible_with: [],
        size: 0.1,
        min_tank_size: 1,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: null,
        water_hardness_min: 6,
        water_hardness_max: 10,
    },
    'Black Neon Tetra': {
        species: 'Black Neon Tetra',
        water_temp_min: 68,
        water_temp_max: 82,
        ph_min: 5.5,
        ph_max: 7,
        incompatible_with: [],
        size: 1,
        min_tank_size: 10,
        schooling: true,
        schooling_min: 6,
        special_message: null,
        tank_position: 'Mid-Level Dweller',
        water_hardness_min: 4,
        water_hardness_max: 8,
    },
    'Congo Tetra': {
        species: 'Congo Tetra',
        water_temp_min: 72,
        water_temp_max: 82,
        ph_min: 6,
        ph_max: 7.5,
        incompatible_with: [],
        size: 2.5,
        min_tank_size: 30,
        schooling: true,
        schooling_min: 6,
        special_message: null,
        tank_position: 'Mid-Level Dweller',
        water_hardness_min: 4,
        water_hardness_max: 12,
    },
    'Ember Tetra': {
        species: 'Ember Tetra',
        water_temp_min: 73,
        water_temp_max: 84,
        ph_min: 5,
        ph_max: 8,
        incompatible_with: [],
        size: 0.6,
        min_tank_size: 10,
        schooling: true,
        schooling_min: 6,
        special_message: null,
        tank_position: 'Mid-Level Dweller',
        water_hardness_min: 5,
        water_hardness_max: 17,
    },
    'Bamboo Shrimp': {
        species: 'Bamboo Shrimp',
        water_temp_min: 73,
        water_temp_max: 84,
        ph_min: 6.3,
        ph_max: 7.7,
        incompatible_with: [],
        size: 0.6,
        min_tank_size: 4,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Bottom-Level Dweller',
        water_hardness_min: 3,
        water_hardness_max: 11,
    },
    'Ghost Shrimp': {
        species: 'Ghost Shrimp',
        water_temp_min: 72,
        water_temp_max: 82,
        ph_min: 7,
        ph_max: 8,
        incompatible_with: [],
        size: 0.6,
        min_tank_size: 4,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Bottom-Level Dweller',
        water_hardness_min: 3,
        water_hardness_max: 15,
    },
    'Blue Velvet Shrimp': {
        species: 'Blue Velvet Shrimp',
        water_temp_min: 62,
        water_temp_max: 80,
        ph_min: 6.5,
        ph_max: 7.8,
        incompatible_with: [],
        size: 0.6,
        min_tank_size: 4,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Bottom-Level Dweller',
        water_hardness_min: 2,
        water_hardness_max: 16,
    },
    'Crystal Red Shrimp': {
        species: 'Crystal Red Shrimp',
        water_temp_min: 66,
        water_temp_max: 80,
        ph_min: 6,
        ph_max: 7.4,
        incompatible_with: [],
        size: 0.6,
        min_tank_size: 4,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Bottom-Level Dweller',
        water_hardness_min: 3,
        water_hardness_max: 7,
    },
    'Red Rili Shrimp': {
        species: 'Red Rili Shrimp',
        water_temp_min: 70,
        water_temp_max: 81,
        ph_min: 6.3,
        ph_max: 7.7,
        incompatible_with: [],
        size: 0.2,
        min_tank_size: 4,
        schooling: true,
        schooling_min: 3,
        special_message: null,
        tank_position: 'Bottom-Level Dweller',
        water_hardness_min: 3,
        water_hardness_max: 9,
    },
    'Tiger Shrimp': {
        species: 'Tiger Shrimp',
        water_temp_min: 66,
        water_temp_max: 80,
        ph_min: 6.3,
        ph_max: 8,
        incompatible_with: [],
        size: 0.2,
        min_tank_size: 4,
        schooling: false,
        schooling_min: 0,
        special_message: null,
        tank_position: 'Bottom-Level Dweller',
        water_hardness_min: 4,
        water_hardness_max: 7,
    },
};