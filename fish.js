

export class Fish {
    constructor(species, water_temp_min, water_temp_max, ph_min, ph_max, incompatible_with, size, min_tank_size, schooling) {
        this.species = species
        this.water_temp_min = water_temp_min
        this.water_temp_max = water_temp_max
        this.ph_min = ph_min
        this.ph_max = ph_max
        this.incompatible_with = incompatible_with
        this.size = size
        this.min_tank_size = min_tank_size
        this.schooling = schooling
    }
}

export class Dwarf_Gourami {
    constructor() {
        this.species = 'Dwarf_Gourami'
        this.water_temp_min = 72
        this.water_temp_max = 82
        this.ph_min = 6
        this.ph_max = 8
        this.incompatible_with = ['betta_male']
        this.size = 2.5
        this.min_tank_size = 10
        this.schooling = false
    }

}

export class Betta_Male {
    constructor() {
        this.species = 'Betta_Male'
        this.water_temp_min = 76
        this.water_temp_max = 85
        this.ph_min = 6.8
        this.ph_max = 7.5
        this.incompatible_with = []
        this.size = 2.5
        this.min_tank_size = 5
        this.schooling = false
    }

}

export class Betta_Female {
    constructor() {
        this.species = 'Betta_Female'
        this.water_temp_min = 76
        this.water_temp_max = 85
        this.ph_min = 6.8
        this.ph_max = 7.5
        this.incompatible_with = []
        this.size = 2.5
        this.min_tank_size = 5
        this.schooling = false
    }

}

export class Cherry_Shrimp {
    constructor() {
        this.species = 'Cherry_Shrimp'
        this.water_temp_min = 81
        this.water_temp_max = 82
        this.ph_min = 6.7
        this.ph_max = 8.5
        this.incompatible_with = []
        this.size = 0.2
        this.min_tank_size = 1
        this.schooling = false
    }

}

export class Neon_Tetra {
    constructor() {
        this.species = 'Neon_Tetra'
        this.water_temp_min = 72
        this.water_temp_max = 76
        this.ph_min = 6
        this.ph_max = 7
        this.incompatible_with = []
        this.size = 1.5
        this.min_tank_size = 10
        this.schooling = true
    }

}
export class Cardinal_Tetra {
    constructor() {
        this.species = 'Cardinal_Tetra'
        this.water_temp_min = 73
        this.water_temp_max = 84
        this.ph_min = 4
        this.ph_max = 7.5
        this.incompatible_with = []
        this.size = 1.25
        this.min_tank_size = 20
        this.schooling = true
    }

}
export class African_Dwarf_Frog {
    constructor() {
        this.species = 'African_Dwarf_Frog'
        this.water_temp_min = 68
        this.water_temp_max = 78
        this.ph_min = 6.5
        this.ph_max = 7.8
        this.incompatible_with = []
        this.size = 3
        this.min_tank_size = 15
        this.schooling = true
    }

}



