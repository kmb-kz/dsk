use bip3
if object_id('v_cns_AreaPartAnswers','v') is not null
drop view dbo.v_cns_AreaPartAnswers
go
CREATE VIEW dbo.v_cns_AreaPartAnswers
WITH SCHEMABINDING
AS
	select ar.Id AreaPartId,
		COUNT_BIG(*) Answers,
		COUNT_BIG(case when a.Matches = 0 then 1 end) NotMatches,
		COUNT_BIG(case when a.Matches = 0 and a.AnswerTypeId = 1 then 1 end) Fixed
	from dbo.cns_Answers a, dbo.cns_Schemes s, dbo.cns_SchemePoints p, dbo.cmn_AreaParts ar
	where p.Deleted is null and a.PointId = p.Id and p.SchemeId = s.Id and s.AreaPartId = ar.Id
	group by ar.Id
GO	
CREATE UNIQUE CLUSTERED INDEX v_cns_AreaPartAnswersIndex 
	ON dbo.v_cns_AreaPartAnswers(AreaPartId);


drop view dbo.v_cns_SchemeAnswers
go
CREATE VIEW dbo.v_cns_SchemeAnswers
WITH SCHEMABINDING
AS
	select s.Id SchemeId,
		COUNT_BIG(*) Answers,
		COUNT_BIG(case when a.Matches = 0 then 1 end) NotMatches,
		COUNT_BIG(case when a.Matches = 0 and a.AnswerTypeId = 1 then 1 end) Fixed
	from dbo.cns_Answers a, dbo.cns_Schemes s, dbo.cns_SchemePoints p
	where p.Deleted is null and a.PointId = p.Id and p.SchemeId = s.Id
	group by s.Id
GO	
CREATE UNIQUE CLUSTERED INDEX v_cns_AreaPartSchemeAnswersIndex 
	ON dbo.v_cns_SchemeAnswers(SchemeId);

drop view dbo.v_cns_PointAnswers
go
CREATE VIEW dbo.v_cns_PointAnswers
WITH SCHEMABINDING
AS
	select  p.Id PointId,
		COUNT_BIG(*) Answers,
		COUNT_BIG(case when a.Matches = 0 then 1 end) NotMatches,
		COUNT_BIG(case when a.Matches = 0 and a.AnswerTypeId = 1 then 1 end) Fixed,
		SUM(isnull(vp.Percentage, 0)) Percentage
	from dbo.cns_Answers a, dbo.cns_SchemePoints p, dbo.std_VersionParameters vp
	where p.Deleted is null and a.PointId = p.Id and vp.Id = a.ParameterId
	group by p.Id
GO	
CREATE UNIQUE CLUSTERED INDEX v_cns_PointAnswersIndex 
	ON dbo.v_cns_PointAnswers(PointId);