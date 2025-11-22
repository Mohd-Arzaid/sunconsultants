import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SchemeXProductsSkeleton from "@/components/ui/scheme-x-products-skeleton";
const Centrifuges = lazy(() =>
  import("../schemeXProducts/Centrifuges/Centrifuges")
);
const CentrifugesFrench = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesFrench")
);
const CentrifugesGerman = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesGerman")
);
const CentrifugesVietnamese = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesVietnamese")
);
const CentrifugesSpanish = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesSpanish")
);
const CentrifugesKorean = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesKorean")
);
const CentrifugesIndonesian = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesIndonesian")
);
const CentrifugesItalian = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesItalian")
);
const CentrifugesThai = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesThai")
);
const CentrifugesDutch = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesDutch")
);
const CentrifugesArabic = lazy(() =>
  import("../schemeXProducts/Centrifuges/CentrifugesArabic")
);
const Compressors = lazy(() =>
  import("../schemeXProducts/Compressors/Compressors")
);
const CompressorsFrench = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsFrench")
);
const CompressorsGerman = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsGerman")
);
const CompressorsVietnamese = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsVietnamese")
);
const CompressorsSpanish = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsSpanish")
);
const CompressorsKorean = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsKorean")
);
const CompressorsIndonesian = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsIndonesian")
);
const CompressorsItalian = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsItalian")
);
const CompressorsThai = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsThai")
);
const CompressorsDutch = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsDutch")
);
const CompressorsArabic = lazy(() =>
  import("../schemeXProducts/Compressors/CompressorsArabic")
);
const ConstructionMachinery = lazy(() =>
  import("../schemeXProducts/ConstructionMachinery/ConstructionMachinery")
);
const ConstructionMachineryFrench = lazy(() =>
  import("../schemeXProducts/ConstructionMachinery/ConstructionMachineryFrench")
);
const ConstructionMachineryGerman = lazy(() =>
  import("../schemeXProducts/ConstructionMachinery/ConstructionMachineryGerman")
);
const ConstructionMachineryVietnamese = lazy(() =>
  import(
    "../schemeXProducts/ConstructionMachinery/ConstructionMachineryVietnamese"
  )
);
const ConstructionMachinerySpanish = lazy(() =>
  import(
    "../schemeXProducts/ConstructionMachinery/ConstructionMachinerySpanish"
  )
);
const ConstructionMachineryKorean = lazy(() =>
  import("../schemeXProducts/ConstructionMachinery/ConstructionMachineryKorean")
);
const ConstructionMachineryIndonesian = lazy(() =>
  import(
    "../schemeXProducts/ConstructionMachinery/ConstructionMachineryIndonesian"
  )
);
const ConstructionMachineryItalian = lazy(() =>
  import(
    "../schemeXProducts/ConstructionMachinery/ConstructionMachineryItalian"
  )
);
const ConstructionMachineryThai = lazy(() =>
  import("../schemeXProducts/ConstructionMachinery/ConstructionMachineryThai")
);
const ConstructionMachineryDutch = lazy(() =>
  import("../schemeXProducts/ConstructionMachinery/ConstructionMachineryDutch")
);
const ConstructionMachineryArabic = lazy(() =>
  import("../schemeXProducts/ConstructionMachinery/ConstructionMachineryArabic")
);
const Cranes = lazy(() => import("../schemeXProducts/Cranes/Cranes"));
const CranesFrench = lazy(() =>
  import("../schemeXProducts/Cranes/CranesFrench")
);
const CranesGerman = lazy(() =>
  import("../schemeXProducts/Cranes/CranesGerman")
);
const CranesVietnamese = lazy(() =>
  import("../schemeXProducts/Cranes/CranesVietnamese")
);
const CranesSpanish = lazy(() =>
  import("../schemeXProducts/Cranes/CranesSpanish")
);
const CranesKorean = lazy(() =>
  import("../schemeXProducts/Cranes/CranesKorean")
);
const CranesIndonesian = lazy(() =>
  import("../schemeXProducts/Cranes/CranesIndonesian")
);
const CranesItalian = lazy(() =>
  import("../schemeXProducts/Cranes/CranesItalian")
);
const CranesThai = lazy(() => import("../schemeXProducts/Cranes/CranesThai"));
const CranesDutch = lazy(() => import("../schemeXProducts/Cranes/CranesDutch"));
const CranesArabic = lazy(() =>
  import("../schemeXProducts/Cranes/CranesArabic")
);
const DieselGenerator = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGenerator")
);
const DieselGeneratorFrench = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorFrench")
);
const DieselGeneratorGerman = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorGerman")
);
const DieselGeneratorVietnamese = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorVietnamese")
);
const DieselGeneratorSpanish = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorSpanish")
);
const DieselGeneratorKorean = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorKorean")
);
const DieselGeneratorIndonesian = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorIndonesian")
);
const DieselGeneratorItalian = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorItalian")
);
const DieselGeneratorThai = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorThai")
);
const DieselGeneratorDutch = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorDutch")
);
const DieselGeneratorArabic = lazy(() =>
  import("../schemeXProducts/DieselGenerator/DieselGeneratorArabic")
);
const EmbroideryMachines = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachines")
);
const EmbroideryMachinesFrench = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesFrench")
);
const EmbroideryMachinesGerman = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesGerman")
);
const EmbroideryMachinesVietnamese = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesVietnamese")
);
const EmbroideryMachinesSpanish = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesSpanish")
);
const EmbroideryMachinesKorean = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesKorean")
);
const EmbroideryMachinesIndonesian = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesIndonesian")
);
const EmbroideryMachinesItalian = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesItalian")
);
const EmbroideryMachinesThai = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesThai")
);
const EmbroideryMachinesDutch = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesDutch")
);
const EmbroideryMachinesArabic = lazy(() =>
  import("../schemeXProducts/EmbroideryMachines/EmbroideryMachinesArabic")
);
const GearsGearingsandTransmission = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmission"
  )
);
const GearsGearingsandTransmissionFrench = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionFrench"
  )
);
const GearsGearingsandTransmissionGerman = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionGerman"
  )
);
const GearsGearingsandTransmissionVietnamese = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionVietnamese"
  )
);
const GearsGearingsandTransmissionSpanish = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionSpanish"
  )
);
const GearsGearingsandTransmissionKorean = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionKorean"
  )
);
const GearsGearingsandTransmissionIndonesian = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionIndonesian"
  )
);
const GearsGearingsandTransmissionItalian = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionItalian"
  )
);
const GearsGearingsandTransmissionThai = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionThai"
  )
);
const GearsGearingsandTransmissionDutch = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionDutch"
  )
);
const GearsGearingsandTransmissionArabic = lazy(() =>
  import(
    "../schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionArabic"
  )
);
const HeatTreatmentEquipment = lazy(() =>
  import("../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipment")
);
const HeatTreatmentEquipmentFrench = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentFrench"
  )
);
const HeatTreatmentEquipmentGerman = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentGerman"
  )
);
const HeatTreatmentEquipmentVietnamese = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentVietnamese"
  )
);
const HeatTreatmentEquipmentSpanish = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentSpanish"
  )
);
const HeatTreatmentEquipmentArabic = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentArabic"
  )
);
const HeatTreatmentEquipmentKorean = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentKorean"
  )
);
const HeatTreatmentEquipmentIndonesian = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentIndonesian"
  )
);
const HeatTreatmentEquipmentItalian = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentItalian"
  )
);
const HeatTreatmentEquipmentThai = lazy(() =>
  import("../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentThai")
);
const HeatTreatmentEquipmentDutch = lazy(() =>
  import(
    "../schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentDutch"
  )
);
const MachineTools = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineTools")
);
const MachineToolsFrench = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsFrench")
);
const MachineToolsGerman = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsGerman")
);
const MachineToolsVietnamese = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsVietnamese")
);
const MachineToolsSpanish = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsSpanish")
);
const MachineToolsKorean = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsKorean")
);
const MachineToolsIndonesian = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsIndonesian")
);
const MachineToolsItalian = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsItalian")
);
const MetalCuttingMachines = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachines")
);
const MetalCuttingMachinesFrench = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesFrench")
);
const MetalCuttingMachinesGerman = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesGerman")
);
const MetalCuttingMachinesVietnamese = lazy(() =>
  import(
    "../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesVietnamese"
  )
);
const MetalCuttingMachinesSpanish = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesSpanish")
);
const MetalCuttingMachinesKorean = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesKorean")
);
const MetalCuttingMachinesIndonesian = lazy(() =>
  import(
    "../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesIndonesian"
  )
);
const MetalCuttingMachinesItalian = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesItalian")
);
const MetalCuttingMachinesJapanese = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesJapanese")
);
const MetalCuttingMachinesThai = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesThai")
);
const MetalCuttingMachinesDutch = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesDutch")
);
const MetalCuttingMachinesArabic = lazy(() =>
  import("../schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesArabic")
);
const PackingMachinery = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachinery")
);
const PackingMachineryFrench = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryFrench")
);
const PackingMachineryGerman = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryGerman")
);
const PackingMachineryVietnamese = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryVietnamese")
);
const PackingMachinerySpanish = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachinerySpanish")
);
const PackingMachineryKorean = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryKorean")
);
const PackingMachineryIndonesian = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryIndonesian")
);
const PackingMachineryItalian = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryItalian")
);
const PackingMachineryJapanese = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryJapanese")
);
const PackingMachineryThai = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryThai")
);
const PackingMachineryDutch = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryDutch")
);
const PackingMachineryArabic = lazy(() =>
  import("../schemeXProducts/PackingMachinery/PackingMachineryArabic")
);
const PowerSemiconductors = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductors")
);
const PowerSemiconductorsFrench = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsFrench")
);
const PowerSemiconductorsGerman = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsGerman")
);
const PowerSemiconductorsVietnamese = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsVietnamese")
);
const PowerSemiconductorsSpanish = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsSpanish")
);
const PowerSemiconductorsKorean = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsKorean")
);
const PowerSemiconductorsIndonesian = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsIndonesian")
);
const PowerSemiconductorsItalian = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsItalian")
);
const PowerSemiconductorsJapanese = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsJapanese")
);
const PowerSemiconductorsThai = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsThai")
);
const PowerSemiconductorsDutch = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsDutch")
);
const PowerSemiconductorsArabic = lazy(() =>
  import("../schemeXProducts/PowerSemiconductors/PowerSemiconductorsArabic")
);
const PublicWorksAndMechanical = lazy(() =>
  import("../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanical")
);
const PublicWorksAndMechanicalFrench = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalFrench"
  )
);
const PublicWorksAndMechanicalGerman = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalGerman"
  )
);
const PublicWorksAndMechanicalVietnamese = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalVietnamese"
  )
);
const PublicWorksAndMechanicalSpanish = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalSpanish"
  )
);
const PublicWorksAndMechanicalKorean = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalKorean"
  )
);
const PublicWorksAndMechanicalIndonesian = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalIndonesian"
  )
);
const PublicWorksAndMechanicalItalian = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalItalian"
  )
);
const PublicWorksAndMechanicalJapanese = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalJapanese"
  )
);
const PublicWorksAndMechanicalThai = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalThai"
  )
);
const PublicWorksAndMechanicalDutch = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalDutch"
  )
);
const PublicWorksAndMechanicalArabic = lazy(() =>
  import(
    "../schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalArabic"
  )
);
const PumpsAndLiquidElevators = lazy(() =>
  import("../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevators")
);
const PumpsAndLiquidElevatorsGerman = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsGerman"
  )
);
const PumpsAndLiquidElevatorsSpanish = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsSpanish"
  )
);
const PumpsAndLiquidElevatorsFrench = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsFrench"
  )
);
const PumpsAndLiquidElevatorsIndonesian = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsIndonesian"
  )
);
const PumpsAndLiquidElevatorsItalian = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsItalian"
  )
);
const PumpsAndLiquidElevatorsJapanese = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsJapanese"
  )
);
const PumpsAndLiquidElevatorsKorean = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsKorean"
  )
);
const PumpsAndLiquidElevatorsDutch = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsDutch"
  )
);
const PumpsAndLiquidElevatorsArabic = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsArabic"
  )
);
const PumpsAndLiquidElevatorsThai = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsThai"
  )
);
const PumpsAndLiquidElevatorsVietnamese = lazy(() =>
  import(
    "../schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsVietnamese"
  )
);
const RotaryElectricalMachines = lazy(() =>
  import("../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachines")
);
const RotaryElectricalMachinesFrench = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesFrench"
  )
);
const RotaryElectricalMachinesGerman = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesGerman"
  )
);
const RotaryElectricalMachinesVietnamese = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesVietnamese"
  )
);
const RotaryElectricalMachinesArabic = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesArabic"
  )
);
const RotaryElectricalMachinesSpanish = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesSpanish"
  )
);
const RotaryElectricalMachinesKorean = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesKorean"
  )
);
const RotaryElectricalMachinesIndonesian = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesIndonesian"
  )
);
const RotaryElectricalMachinesItalian = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesItalian"
  )
);
const RubberAndPlasticsMachinery = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachinery"
  )
);
const RubberAndPlasticsMachineryFrench = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryFrench"
  )
);
const RubberAndPlasticsMachineryGerman = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryGerman"
  )
);
const RubberAndPlasticsMachineryVietnamese = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryVietnamese"
  )
);
const RubberAndPlasticsMachinerySpanish = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachinerySpanish"
  )
);
const RubberAndPlasticsMachineryKorean = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryKorean"
  )
);
const RubberAndPlasticsMachineryIndonesian = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryIndonesian"
  )
);
const RubberAndPlasticsMachineryItalian = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryItalian"
  )
);
const RubberAndPlasticsMachineryJapanese = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryJapanese"
  )
);
const RubberAndPlasticsMachineryThai = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryThai"
  )
);
const RubberAndPlasticsMachineryDutch = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryDutch"
  )
);
const RubberAndPlasticsMachineryArabic = lazy(() =>
  import(
    "../schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryArabic"
  )
);
const SwitchgearandControlgearEquipment = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipment"
  )
);
const SwitchgearandControlgearEquipmentFrench = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentFrench"
  )
);
const SwitchgearandControlgearEquipmentGerman = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentGerman"
  )
);
const SwitchgearandControlgearEquipmentVietnamese = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentVietnamese"
  )
);
const SwitchgearandControlgearEquipmentSpanish = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentSpanish"
  )
);
const SwitchgearandControlgearEquipmentKorean = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentKorean"
  )
);
const SwitchgearandControlgearEquipmentIndonesian = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentIndonesian"
  )
);
const SwitchgearandControlgearEquipmentItalian = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentItalian"
  )
);
const SwitchgearandControlgearEquipmentabove1000Volts = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000Volts"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsFrench = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsFrench"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsGerman = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsGerman"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsVietnamese = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsVietnamese"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsSpanish = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsSpanish"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsKorean = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsKorean"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsIndonesian = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsIndonesian"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsItalian = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsItalian"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsJapanese = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsJapanese"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsThai = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsThai"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsDutch = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsDutch"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsArabic = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsArabic"
  )
);
const SwitchgearandControlgearEquipmentabove1000VoltsChinese = lazy(() =>
  import(
    "@/schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsChinese"
  )
);
const Transformers = lazy(() =>
  import("../schemeXProducts/Transformers/Transformers")
);
const TransformersFrench = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersFrench")
);
const TransformersGerman = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersGerman")
);
const TransformersVietnamese = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersVietnamese")
);
const TransformersSpanish = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersSpanish")
);
const TransformersKorean = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersKorean")
);
const TransformersIndonesian = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersIndonesian")
);
const TransformersItalian = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersItalian")
);
const TransformersJapanese = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersJapanese")
);
const TransformersThai = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersThai")
);
const TransformersDutch = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersDutch")
);
const TransformersArabic = lazy(() =>
  import("../schemeXProducts/Transformers/TransformersArabic")
);
const TransformersChinese = lazy(() =>
  import("@/schemeXProducts/Transformers/TransformersChiese")
);
const WeavingMachines = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachines")
);
const WeavingMachinesFrench = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesFrench")
);
const WeavingMachinesGerman = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesGerman")
);
const WeavingMachinesVietnamese = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesVietnamese")
);
const WeavingMachinesSpanish = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesSpanish")
);
const WeavingMachinesKorean = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesKorean")
);
const WeavingMachinesIndonesian = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesIndonesian")
);
const WeavingMachinesItalian = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesItalian")
);
const WeavingMachinesJapanese = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesJapanese")
);
const WeavingMachinesThai = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesThai")
);
const WeavingMachinesDutch = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesDutch")
);
const WeavingMachinesArabic = lazy(() =>
  import("../schemeXProducts/WeavingMachines/WeavingMachinesArabic")
);
const WeavingMachinesChinese = lazy(() =>
  import("@/schemeXProducts/WeavingMachines/WeavingMachinesChinese")
);
const CentrifugesJapanese = lazy(() =>
  import("@/schemeXProducts/Centrifuges/CentrifugesJapanese")
);
const CentrifugesChinese = lazy(() =>
  import("@/schemeXProducts/Centrifuges/CentrifugesChinese")
);
const CompressorsChinese = lazy(() =>
  import("@/schemeXProducts/Compressors/CompressorsChinese")
);
const ConstructionMachineryChinese = lazy(() =>
  import("@/schemeXProducts/ConstructionMachinery/ConstructionMachineryChinese")
);
const CranesChinese = lazy(() =>
  import("@/schemeXProducts/Cranes/CranesChaniese")
);
const DieselGeneratorChinese = lazy(() =>
  import("@/schemeXProducts/DieselGenerator/DieselGeneratorChinese")
);
const EmbroideryMachinesChinese = lazy(() =>
  import("@/schemeXProducts/EmbroideryMachines/EmbroideryMachinesChinese")
);
const GearsGearingsandTransmissionChinese = lazy(() =>
  import(
    "@/schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionChinese"
  )
);
const HeatTreatmentEquipmentChinese = lazy(() =>
  import(
    "@/schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentChinese"
  )
);
const MachineToolsChinese = lazy(() =>
  import("@/schemeXProducts/MachineTools/MachineToolsChinese")
);
const MetalCuttingMachinesChinese = lazy(() =>
  import("@/schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesChinese")
);
const PackingMachineryChinese = lazy(() =>
  import("@/schemeXProducts/PackingMachinery/PackingMachineryChinese")
);
const PowerSemiconductorsChinese = lazy(() =>
  import("@/schemeXProducts/PowerSemiconductors/PowerSemiconductorsChinese")
);
const PublicWorksAndMechanicalChinese = lazy(() =>
  import(
    "@/schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalChinese"
  )
);
const PumpsAndLiquidElevatorsChinese = lazy(() =>
  import(
    "@/schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsChinese"
  )
);
const RotaryElectricalMachinesChinese = lazy(() =>
  import(
    "@/schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesChinese"
  )
);
const RubberAndPlasticsMachineryChinese = lazy(() =>
  import(
    "@/schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryChinese"
  )
);
const CompressorsJapanese = lazy(() =>
  import("@/schemeXProducts/Compressors/CompressorsJapanese")
);
const ConstructionMachineryJapanese = lazy(() =>
  import(
    "@/schemeXProducts/ConstructionMachinery/ConstructionMachineryJapanese"
  )
);
const CranesJapanese = lazy(() =>
  import("@/schemeXProducts/Cranes/CranesJapanese")
);
const DieselGeneratorJapanese = lazy(() =>
  import("@/schemeXProducts/DieselGenerator/DieselGeneratorJapanese")
);
const EmbroideryMachinesJapanese = lazy(() =>
  import("@/schemeXProducts/EmbroideryMachines/EmbroideryMachinesJapanese")
);
const GearsGearingsandTransmissionJapanese = lazy(() =>
  import(
    "@/schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionJapanese"
  )
);
const HeatTreatmentEquipmentJapanese = lazy(() =>
  import(
    "@/schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentJapanese"
  )
);
const MachineToolsJapanese = lazy(() =>
  import("@/schemeXProducts/MachineTools/MachineToolsJapanese")
);
const MachineToolsThai = lazy(() =>
  import("@/schemeXProducts/MachineTools/MachineToolsThai")
);
const MachineToolsDutch = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsDutch")
);
const MachineToolsArabic = lazy(() =>
  import("../schemeXProducts/MachineTools/MachineToolsArabic")
);
const RotaryElectricalMachinesJapanese = lazy(() =>
  import(
    "@/schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesJapanese"
  )
);
const RotaryElectricalMachinesThai = lazy(() =>
  import(
    "@/schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesThai"
  )
);
const RotaryElectricalMachinesDutch = lazy(() =>
  import(
    "../schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesDutch"
  )
);
const SwitchgearandControlgearEquipmentJapanese = lazy(() =>
  import(
    "@/schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentJapanese"
  )
);
const SwitchgearandControlgearEquipmentThai = lazy(() =>
  import(
    "@/schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentThai"
  )
);
const SwitchgearandControlgearEquipmentDutch = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentDutch"
  )
);
const SwitchgearandControlgearEquipmentArabic = lazy(() =>
  import(
    "../schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentArabic"
  )
);
const SwitchgearandControlgearEquipmentChinese = lazy(() =>
  import(
    "@/schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentChinese"
  )
);

export const SchemeXProductsRoutes = () => {
  return (
    <>
      {/* Pumps And Liquid Elevators Pages */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevators />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsGerman />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsSpanish />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsFrench />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-beng-he-ye-ti-ti-sheng-ji-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsChinese />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsKorean />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsArabic />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsThai />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PumpsAndLiquidElevatorsVietnamese />
          </Suspense>
        }
      />

      {/* Pumps And Liquid Elevators Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Centrifuges Pages */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <Centrifuges />
          </Suspense>
        }
      />

      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-sentorifugyu-oyobi-roka-matawa-joka-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-li-xin-ji-he-guo-lv-huo-jing-hua-ji-xie-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesChinese />
          </Suspense>
        }
      />

      {/* french */}
      <Route
        path="/certification-bis-schema-x-pour-centrifugeuses-et-machines-de-filtrage-ou-purification"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-zentrifugen-und-filter-oder-reinigungsmaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-ly-tam-va-thiet-bi-loc-hoac-tinh-che"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-centrifugas-y-maquinaria-de-filtrado-o-purificacion"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-sentrifus-dan-mesin-penyaring-atau-pemurnian"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-centrifughe-e-macchinari-di-filtrazione-o-purificazione"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesItalian />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-pan-wia-lae-khrueang-krong-rue-tham-hai-borisut"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-centrifuges-en-filter-of-zuiveringsmachines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-taard-almarkazi-wa-alat-altasfiya-aw-altanqiya"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CentrifugesArabic />
          </Suspense>
        }
      />

      {/* Centrifuges Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Compressors Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-compressors"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <Compressors />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-konpuresa"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-ya-suo-ji-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsChinese />
          </Suspense>
        }
      />

      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-compresseurs"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-kompressoren"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-nen-khi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-compresores"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-apchukgi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-kompresor"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-compressori"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsItalian />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-kompresor"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-compressoren"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-daghitat"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CompressorsArabic />
          </Suspense>
        }
      />

      {/* Compressors Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Construction Machinery Pages Start */}

      {/* {English } */}
      <Route
        path="/bis-scheme-x-certification-for-construction-machinery"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachinery />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-kensetsu-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-jian-zhu-ji-xie-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryChinese />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-machines-de-construction"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-baumaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-moc-xay-dung"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-maquinaria-de-construccion"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachinerySpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-geonseol-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-mesin-konstruksi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-macchinari-da-costruzione"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryItalian />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-thi-khuk-khuk"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-bouwmachines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-alat-albina"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <ConstructionMachineryArabic />
          </Suspense>
        }
      />

      {/* Construction Machinery Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Cranes Pages Start */}

      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-cranes"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <Cranes />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-kurein"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-qi-zhong-ji-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesChinese />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-ponts-roulants"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-krane"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-can-cau"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-gruas"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-keurein"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-derek"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-gru"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesItalian />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khren"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-kranen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-rafaat"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <CranesArabic />
          </Suspense>
        }
      />
      {/* Cranes Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Diesel Generators Pages Start */}
      {/* {English } */}
      <Route
        path="/bis-scheme-x-certification-for-diesel-generators"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGenerator />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-dizeru-hatsudenki"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-chai-you-fa-dian-ji-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorChinese />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-generateurs-diesel"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-dieselgeneratoren"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-phat-dien-diesel"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-generadores-diesel"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-dijel-baljeongi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorKorean />
          </Suspense>
        }
      />

      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-generator-diesel"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-generatori-diesel"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorItalian />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-khuean-ngan-fa-fa-diesel"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-dieselgeneratoren"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-mawalid-al-dizil"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <DieselGeneratorArabic />
          </Suspense>
        }
      />

      {/* Diesel Generators Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Embroidery Machines Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-embroidery-machinery"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachines />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-machines-a-broderie"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-stickmaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-moc-theu"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-maquinaria-de-bordado"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-jasu-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-mesin-bordir"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-macchine-da-ricamo"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-shishu-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-ci-xiu-ji-xie-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-thai-rua"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-borduurmachines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-alat-al-tatriz"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <EmbroideryMachinesArabic />
          </Suspense>
        }
      />
      {/* Embroidery Machines Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Gears, Gearing and Transmission Elements Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmission />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-roues-dentees-et-elements-de-transmission"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-zahnraeder-getriebe-und-uebertragungselemente"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-banh-rang-he-thong-truyen-dong-va-cac-bo-phan-truyen-tai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-engranajes-engranajes-y-elementos-de-transmision"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-gie-gearing-jeonseung-yosu"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-roda-gigi-dan-elemen-transmisi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-ingranaggi-ingranamento-ed-elementi-di-trasmissione"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-gia-gearing-oyobi-densha-yoso"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-chi-lun-chi-lun-xi-tong-he-chuan-dong-yuan-jian-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-fueang-rab-khia-lae-ong-prakop-kan-song-kamlang"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-tandwielen-overbrenging-en-transmissie-elementen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-turus-wa-anmatim-al-turus-wa-anasir-al-naql"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <GearsGearingsandTransmissionArabic />
          </Suspense>
        }
      />

      {/* Gears, Gearing and Transmission Elements Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Heat Treatment Equipment Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-heat-treatment-equipment"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipment />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-equipements-de-traitement-thermique"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-thiet-bi-xu-ly-nhiet"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-equipos-de-tratamiento-termico"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-yeolcheori-jangbi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-netsu-shori-souchi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-re-chu-li-she-bei-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-uppakon-bambat-khwam-ron"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-warmtebehandelingsapparatuur"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-maadat-al-mualaja-al-harariya"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <HeatTreatmentEquipmentArabic />
          </Suspense>
        }
      />

      {/* Heat Treatment Equipment Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Machine Tools Pages Start */}
      {/* {English } */}
      <Route
        path="/bis-scheme-x-certification-for-machine-tools"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineTools />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-machines-a-outils"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-werkzeugmaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-cong-cu"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-herramientas-de-maquina"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-gongjag-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsKorean />
          </Suspense>
        }
      />

      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-perkakas-mesin"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsIndonesian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-kousaku-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-ji-chuang-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsChinese />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-utensili-per-macchine"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsItalian />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-mue"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-werktuigmachines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-adawat-al-alat"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MachineToolsArabic />
          </Suspense>
        }
      />

      {/* Machine Tools Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Metal Cutting Machines Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-metal-cutting-machine-tools"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachines />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-cong-cu-cat-kim-loai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-herramientas-de-corte-de-metal"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-geumsog-jeoldan-gongjag-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-kinzoku-setsusaku-kousaku-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-jin-shu-qie-xiao-ji-chuang-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-tat-lohak"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-metaalsnijmachines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-adawat-alat-qata-al-maadin"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <MetalCuttingMachinesArabic />
          </Suspense>
        }
      />

      {/* Metal Cutting Machines Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Packing Machinery Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-packing-machinery"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachinery />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-machines-de-conditionnement"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-verpackungsmaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-moc-dong-goi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-maquinaria-de-empaque"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachinerySpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-pojang-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-mesin-pengemasan"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-macchinari-per-imballaggio"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-pakkingu-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-bao-zhuang-ji-xie-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-pack"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-verpakkingsmachines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-maadat-al-taabia-wa-al-taghlif"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PackingMachineryArabic />
          </Suspense>
        }
      />

      {/* Packing Machinery Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Power Semiconductors Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-power-semiconductor-converters"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductors />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-convertisseurs-semiconducteurs-de-puissance"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-leistungshalbleiter-wandler"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-bo-chuyen-doi-ban-dan-cong-suat"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-convertidores-de-semiconductores-de-potencia"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-jeonlyeog-bandojeo-byeonhwan-gi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-konverter-semikonduktor-daya"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-convertitori-a-semiconduttore-di-potenza"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-denryoku-handoutai-henkan-ki"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-gong-lv-ban-dao-ti-zhuan-huan-qi-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-ploy-phalang-bandojeo"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-vermogenssemiconductor-omzetters"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-muhawilat-ashbah-al-mawasalat-lil-taqa"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PowerSemiconductorsArabic />
          </Suspense>
        }
      />

      {/* Power Semiconductors Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Public Works And Mechanical Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanical />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-travaux-publics-et-appareils-mecaniques"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-baumaschinen-und-mechanische-geraete"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-cong-trinh-cong-cong-va-thiet-bi-co-khi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-obras-publicas-y-aparatos-mecanicos"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-gonggong-sa-eob-mich-gigye-gigu"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-pekerjaan-umum-dan-peralatan-mekanik"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-lavori-pubblici-e-apparecchiature-meccaniche"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-koukyou-jigyou-oyobi-kikai-kougu"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-gong-gong-gong-cheng-he-ji-xie-she-bei-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-ngan-satharana-lae-uppakon-kai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-openbare-werken-en-mechanische-apparaten"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-ashghal-al-amah-wa-al-maadat-al-mikaniqiyah"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <PublicWorksAndMechanicalArabic />
          </Suspense>
        }
      />

      {/* Public Works And Mechanical Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Rotary Electrical Machines Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-rotary-electrical-machines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachines />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-machines-electriques-rotatives"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-rotierende-elektrische-maschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-dien-quay"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesVietnamese />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-alat-al-kahrabiya-al-dawara"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesArabic />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-maquinas-electricas-rotativas"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-hojeon-jeongi-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-mesin-listrik-rotary"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-macchine-elettriche-rotanti"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-kaiten-denki-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-xuan-zhuan-dian-ji-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-fai-fa-kai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-roterende-elektrische-machines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RotaryElectricalMachinesDutch />
          </Suspense>
        }
      />

      {/* Rotary Electrical Machines Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Rubber And Plastics Machinery Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachinery />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-machines-de-caoutchouc-et-plastiques"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-kautschuk-und-kunststoffmaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-moc-cao-su-va-nhua"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-maquinaria-de-caucho-y-plasticos"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachinerySpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-gomu-mich-peullaseutig-gigye"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-mesin-karet-dan-plastik"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-macchinari-di-gomma-e-plastica"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-gomu-oyobi-purasuchikku-kikai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-xiang-jiao-he-su-liao-ji-xie-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-yang-yu-lae-plastik"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-rubber-en-kunststofmachines"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-alat-al-karet-wa-al-blastik"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <RubberAndPlasticsMachineryArabic />
          </Suspense>
        }
      />

      {/* Rubber And Plastics Machinery Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Switchgear And Controlgear Equipment Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipment />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-appareillage-et-commande-jusqu-a-1000-volts"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-schalt-und-steuergeraete-bis-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-thiet-bi-chuyen-mach-va-dieu-khien-len-den-1000-volts"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-equipos-de-interruptores-y-controladores-hasta-1000-voltios"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-iha"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-hingga-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-fino-a-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-suicchigia-oyobi-kontororu-gia-setsubi-1000-boruto-made"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-kai-guan-he-kong-zhi-she-bei-gao-da-1000-fu-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-uppakon-switchgear-lae-controlgear-sut-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-schakel-en-besturingsapparatuur-tot-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-maadat-switchgear-wa-controlgear-hata-1000-folt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentArabic />
          </Suspense>
        }
      />

      {/* Switchgear And Controlgear Equipment Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Switchgear And Controlgear Equipment Above 1000 Volts Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000Volts />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-appareillage-et-commande-au-dessus-1000-volts"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-schalt-und-steuergeraete-ueber-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-thiet-bi-chuyen-mach-va-dieu-khien-tren-1000-volts"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-equipos-de-interruptores-y-controladores-por-encima-de-1000-voltios"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-chogo"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-di-atas-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-oltre-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-suicchigia-oyobi-kontororu-gia-setsubi-1000-boruto-chou"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-kai-guan-he-kong-zhi-she-bei-chao-guo-1000-fu-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-uppakon-switchgear-lae-controlgear-kwa-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-schakel-en-besturingsapparatuur-boven-1000-volt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-maadat-switchgear-wa-controlgear-fawq-1000-folt"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <SwitchgearandControlgearEquipmentabove1000VoltsArabic />
          </Suspense>
        }
      />

      {/* Switchgear And Controlgear Equipment Above 1000 Volts Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Transformers Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-transformers"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <Transformers />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-transformateurs"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-transformatoren"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-bien-ap"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-transformadores"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-byeonab-gi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-transformator"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-trasformatori"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-hensatsuki"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-bian-ya-qi-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-transformer"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-transformators"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-muhawilat"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <TransformersArabic />
          </Suspense>
        }
      />

      {/* Transformers Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Weaving Machines Pages Start */}
      {/* English */}
      <Route
        path="/bis-scheme-x-certification-for-weaving-machines-looms"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachines />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/certification-bis-schema-x-pour-machines-a-tisser-metiers-a-tisser"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesFrench />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/bis-schema-x-zertifizierung-fuer-webmaschinen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/chung-nhan-bis-scheme-x-cho-may-det"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesVietnamese />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/certificacion-bis-scheme-x-para-maquinas-de-tejido"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesSpanish />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/bis-seukim-x-injeung-jigjo-gi"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/sertifikasi-bis-skema-x-untuk-mesin-tenun-alat-tenun"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesIndonesian />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/certificazione-bis-schema-x-per-macchine-per-tessitura-telai"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesItalian />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/bis-sukiimu-x-ninshoo-orimonoiki-ruumu"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesJapanese />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/bis-fang-an-x-zhi-ji-ren-zheng"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesChinese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/kan-rap-rong-bis-phaen-x-samrab-khrueang-tan"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesThai />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/bis-schema-x-certificering-voor-weefmachines-getouwen"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesDutch />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/shahadat-bis-mukhatat-x-lil-alat-al-nasij-wa-al-anwal"
        element={
          <Suspense fallback={<SchemeXProductsSkeleton />}>
            <WeavingMachinesArabic />
          </Suspense>
        }
      />

      {/* Weaving Machines Pages End */}
    </>
  );
};