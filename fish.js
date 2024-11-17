

export class Fish {
    constructor(species, water_temp, compatible_with, size, min_tank_size) {
        this.species = species
        this.water_temp = water_temp
        this.compatible_with = compatible_with
        this.size = size
        this.min_tank_size = min_tank_size
    }
}

export class Dwarf_Gourami {
    constructor() {
    this.species = Dwarf_Gourami
    this.water_temp_min = 72
    this.water_temp_max = 82
    this.ph_min = 6
    this.ph_max = 8
    this.incompatible_with = ['betta_male']
    this.size = 2.5
    this.min_tank_size = 10
    }

}