WHENEVER SQLERROR EXIT FAILURE;
SET DEFINE OFF
SET ECHO ON
-- -----------------------------------------------------------------------------
-- Project      : WMS TI
-- Subproject   : WMS
-- Version      : V05.500
-- -----------------------------------------------------------------------------
-- Script       : 20170809_0950_PR67210_PA58905_POV.sql
-- Type         : SQL Script
-- Author(s)    : Olga Pechatkina
-- Creation     : 08.08.2017
-- CR/PR        : 67210
-- -----------------------------------------------------------------------------
-- Description  :
-- changes length for the column message_guid- from 30 to 255 
-- <ALL>
--
-- -----------------------------------------------------------------------------
--      (c) COPYRIGHT T-Systems
-- -----------------------------------------------------------------------------
-- Changes      :
-- Date		Author		Description
-- -----------------------------------------------------------------------------
--
-- #############################################################################


alter table PD_ERROR modify MESSAGE_GUID VARCHAR2(255 BYTE);
alter table PD_XML_LOGGING modify MESSAGE_GUID VARCHAR2(255 BYTE);

COMMIT;
SET ECHO OFF