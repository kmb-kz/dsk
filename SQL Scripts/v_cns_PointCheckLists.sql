drop view dbo.v_cns_PointCheckLists
go
CREATE VIEW dbo.v_cns_PointCheckLists
WITH SCHEMABINDING
AS
  select p.id PointId,
		stg.Number CheckOrder,
		v.RegulationId,
		vp.Id, 
		ars.Id StandardId, 
		s.Number + ' - ' + s.Title Standard,
		vp.ParameterType + isnull(' : ' + vp.Value,'') + isnull(vp.Measurement, '') Parameter,
		vp.Percentage
	from dbo.cns_Stages stg, dbo.std_Standards s, dbo.std_AreaStandards ars, dbo.std_Versions v, dbo.std_VersionParameters vp,
	dbo.cns_SchemePoints p, dbo.cns_Schemes sc, dbo.cmn_AreaParts ap
	where stg.Id = s.StageId and ap.id = sc.AreaPartId and sc.id = p.SchemeId and ars.IsDeleted = 0 and v.StandardId = s.id and ars.VersionId = v.id and vp.VersionId = v.id
		and s.GroupId = 'ADDC0472-351B-4DE9-A827-1BBE89F65680' and ars.AreaId = ap.AreaId and s.ConstructiveId = p.ConstructiveId
		GO
CREATE UNIQUE CLUSTERED INDEX v_cns_PointCheckListsIndex 
	ON dbo.v_cns_PointCheckLists(PointId, Id);

drop view dbo.v_cns_PointCheckListCounts
go
CREATE VIEW dbo.v_cns_PointCheckListCounts
WITH SCHEMABINDING
AS
    select p.Id PointId, COUNT_BIG(*) Count
	from dbo.cns_Stages stg, dbo.std_Standards s, dbo.std_AreaStandards ars, dbo.std_Versions v, dbo.std_VersionParameters vp,
	dbo.cns_SchemePoints p, dbo.cns_Schemes sc, dbo.cmn_AreaParts ap
	where stg.Id = s.StageId and ap.id = sc.AreaPartId and sc.id = p.SchemeId and ars.IsDeleted = 0 and v.StandardId = s.id and ars.VersionId = v.id and vp.VersionId = v.id
		and s.GroupId = 'ADDC0472-351B-4DE9-A827-1BBE89F65680' and ars.AreaId = ap.AreaId and s.ConstructiveId = p.ConstructiveId
	group by p.Id
		GO
CREATE UNIQUE CLUSTERED INDEX v_cns_PointCheckListCounts 
	ON dbo.v_cns_PointCheckListCounts(PointId);