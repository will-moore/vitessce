import DescriptionSubscriber from '../components/description/DescriptionSubscriber';
import StatusSubscriber from '../components/status/StatusSubscriber';
import GenesSubscriber from '../components/genes/GenesSubscriber';
import CellSetsManagerSubscriber from '../components/sets/CellSetsManagerSubscriber';
import ScatterplotSubscriber from '../components/scatterplot/ScatterplotSubscriber';
import SpatialSubscriber from '../components/spatial/SpatialSubscriber';
import HeatmapSubscriber from '../components/heatmap/HeatmapSubscriber';
import LayerControllerSubscriber from '../components/layer-controller/LayerControllerSubscriber';
import HiGlassSubscriber from '../components/higlass/HiGlassSubscriber';
import CellSetSizesPlotSubscriber from '../components/sets/CellSetSizesPlotSubscriber';

const registry = {
  description: DescriptionSubscriber,
  status: StatusSubscriber,
  genes: GenesSubscriber,
  cellSets: CellSetsManagerSubscriber,
  scatterplot: ScatterplotSubscriber,
  spatial: SpatialSubscriber,
  heatmap: HeatmapSubscriber,
  layerController: LayerControllerSubscriber,
  higlass: HiGlassSubscriber,
  cellSetSizes: CellSetSizesPlotSubscriber,
};

export function getComponent(name) {
  const component = registry[name];
  if (component === undefined) {
    throw new Error(`Could not find definition for "${name}" in registry.`);
  }
  return registry[name];
}
