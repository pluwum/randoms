const workZones = [{ id: 45, name: "some Zone" }];
const appraiser = { workzoneIds: [45] };

const appraiserWorkZones =
  workZones.length !== 0 &&
  appraiser.workzoneIds &&
  appraiser.workzoneIds.length !== 0
    ? workZones.map(workZone => {
        if (appraiser.workzoneIds.includes(workZone.id)) {
          console.log(workZone.name);
        }
      })
    : [];

//console.log(appraiserWorkZones);
