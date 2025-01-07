


export class Fish {
    constructor(species, water_temp_min, water_temp_max, ph_min, ph_max, incompatible_with, size, min_tank_size, schooling, shcooling_min, 
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

export class Dwarf_Gourami {
    constructor() {
        this.species = 'Dwarf Gourami'
        this.water_temp_min = 72
        this.water_temp_max = 82
        this.ph_min = 6
        this.ph_max = 8
        this.incompatible_with = ['Betta Male', 'Cherry Shrimp', ]
        this.size = 2.5
        this.min_tank_size = 10
        this.schooling = false
        this.schooling_min = 0
        this.special_message = "CAUTION, Dwarf Gouramis should not be with other Dwarf Gouramis"
        this.tank_position = "Top Dweller"
        this.water_hardness_min = 5
        this.water_hardness_max = 20
    }
}

export class Betta_Male {
    constructor() {
        this.species = 'Betta Male'
        this.water_temp_min = 76
        this.water_temp_max = 85
        this.ph_min = 6.8
        this.ph_max = 7.5
        this.incompatible_with = ['Cherry Shrimp']
        this.size = 2.5
        this.min_tank_size = 5
        this.schooling = false
        this.schooling_min = 0
        this.special_message = 'CAUTION, Male Bettas should not be with other Betta Males'
        this.tank_position = "Top Dweller"
        this.water_hardness_min = 5
        this.water_hardness_max = 20
    }
}

export class Betta_Female {
    constructor() {
        this.species = 'Betta Female'
        this.water_temp_min = 76
        this.water_temp_max = 85
        this.ph_min = 6.8
        this.ph_max = 7.5
        this.incompatible_with = ['Dwarf Gourami', 'Cherry Shrimp']
        this.size = 2.5
        this.min_tank_size = 5
        this.schooling = false
        this.schooling_min = 0
        this.special_message = null
        this.tank_position = "Top Dweller"
        this.water_hardness_min = 5
        this.water_hardness_max = 20
    }
}

export class Cherry_Shrimp {
    constructor() {
        this.species = 'Cherry Shrimp'
        this.water_temp_min = 65
        this.water_temp_max = 85
        this.ph_min = 6.7
        this.ph_max = 8.5
        this.incompatible_with = []
        this.size = 0.2
        this.min_tank_size = 1
        this.schooling = false
        this.schooling_min = 0
        this.special_message = null
        this.tank_position = "Bottom Dweller"
        this.water_hardness_min = 5
        this.water_hardness_max = 15
    }
}

export class Neon_Tetra {
    constructor() {
        this.species = 'Neon Tetra'
        this.water_temp_min = 72
        this.water_temp_max = 76
        this.ph_min = 4
        this.ph_max = 7.5
        this.incompatible_with = []
        this.size = 1.5
        this.min_tank_size = 10
        this.schooling = true
        this.schooling_min = 6
        this.special_message = null
        this.tank_position = "Mid-Level Dweller"
        this.water_hardness_min = 2
        this.water_hardness_max = 10
    }
}
export class Cardinal_Tetra {
    constructor() {
        this.species = 'Cardinal Tetra'
        this.water_temp_min = 73
        this.water_temp_max = 84
        this.ph_min = 4
        this.ph_max = 7.5
        this.incompatible_with = []
        this.size = 1.25
        this.min_tank_size = 20
        this.schooling = true
        this.schooling_min = 6
        this.special_message = null
        this.tank_position = "Mid-Level Dweller"
        this.water_hardness_min = 1
        this.water_hardness_max = 10
    }
}
export class African_Dwarf_Frog {
    constructor() {
        this.species = 'African Dwarf Frog'
        this.water_temp_min = 68
        this.water_temp_max = 82
        this.ph_min = 6.5
        this.ph_max = 7.8
        this.incompatible_with = []
        this.size = 3
        this.min_tank_size = 15
        this.schooling = true
        this.schooling_min = 2
        this.special_message = "CAUTION, African Dwarf Frogs need a tank with water depth of less than 18 inches because they go up for air"
        this.tank_position = "Bottom Dweller"
        this.water_hardness_min = 12
        this.water_hardness_max = 15
    }
}

export class Fancy_Guppy {
    constructor() {
        this.species = 'Fancy Guppy'
        this.water_temp_min = 72
        this.water_temp_max = 82
        this.ph_min = 6.5
        this.ph_max = 8.5
        this.incompatible_with = []
        this.size = 2.4
        this.min_tank_size = 10
        this.schooling = true
        this.schooling_min = 6
        this.special_message = null
        this.tank_position = "Mid-Level Dweller"
        this.water_hardness_min = 5
        this.water_hardness_max = 15
    }
}

export class Harlequin_Rasbora {
    constructor() {
        this.species = 'Harlequin Rasbora'
        this.water_temp_min = 72
        this.water_temp_max = 82
        this.ph_min = 6
        this.ph_max = 7.5
        this.incompatible_with = []
        this.size = 2
        this.min_tank_size = 10
        this.schooling = true
        this.schooling_min = 6
        this.special_message = null
        this.tank_position = "Mid-Level Dweller"
        this.water_hardness_min = 3
        this.water_hardness_max = 10
    }
}

export class Amano_Shrimp {
    constructor() {
        this.species = 'Amano Shrimp'
        this.water_temp_min = 65
        this.water_temp_max = 84
        this.ph_min = 6.5
        this.ph_max = 8
        this.incompatible_with = []
        this.size = 1.5
        this.min_tank_size = 1
        this.schooling = false
        this.schooling_min = 0
        this.special_message = null
        this.tank_position = "Bottom Dweller"
        this.water_hardness_min = 4
        this.water_hardness_max = 15
    }
}

export class Nerite_Snail {
    constructor() {
        this.species = 'Nerite Snail'
        this.water_temp_min = 65
        this.water_temp_max = 85
        this.ph_min = 6.5
        this.ph_max = 8.5
        this.incompatible_with = []
        this.size = 0.1
        this.min_tank_size = 1
        this.schooling = false
        this.schooling_min = 0
        this.special_message = null
        this.tank_position = null
        this.water_hardness_min = 6
        this.water_hardness_max = 10
    }
}

export class Black_Neon_Tetra {
    constructor() {
        this.species = 'Black Neon Tetra'
        this.water_temp_min = 68
        this.water_temp_max = 82
        this.ph_min = 5.5
        this.ph_max = 7
        this.incompatible_with = []
        this.size = 1
        this.min_tank_size = 10
        this.schooling = true
        this.schooling_min = 6
        this.special_message = null
        this.tank_position = "Mid-Level Dweller"
        this.water_hardness_min = 4
        this.water_hardness_max = 8
    }
}

export class Congo_Tetra {
    constructor() {
        this.species = 'Congo Tetra'
        this.water_temp_min = 72
        this.water_temp_max = 82
        this.ph_min = 6
        this.ph_max = 7.5
        this.incompatible_with = []
        this.size = 2.5
        this.min_tank_size = 30
        this.schooling = true
        this.schooling_min = 6
        this.special_message = null
        this.tank_position = 'Mid-Level Dweller'
        this.water_hardness_min = 4
        this.water_hardness_max = 12
    }
}

export class Ember_Tetra {
    constructor() {
        this.species = 'Ember Tetra'
        this.water_temp_min = 73
        this.water_temp_max = 84
        this.ph_min = 5
        this.ph_max = 8
        this.incompatible_with = []
        this.size = 0.6
        this.min_tank_size = 10
        this.schooling = true
        this.schooling_min = 6
        this.special_message = null
        this.tank_position = 'Mid-Level Dweller'
        this.water_hardness_min = 5
        this.water_hardness_max = 17
    }
}




