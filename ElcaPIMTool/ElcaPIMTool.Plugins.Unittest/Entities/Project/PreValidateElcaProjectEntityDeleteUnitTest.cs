using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ElcaPIMTool.Common.CrmEarlyBound;
using ElcaPIMTool.Plugins;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Client;
using System.Configuration;
using Microsoft.Xrm.Tooling.Connector;



namespace ElcaPIMTool.Plugins.Unittest
{
    [TestClass]
    public class PreValidateElcaProjectEntityDeleteUnitTest
    {
        private Guid newProjectId;
        private Guid notNewProjectId;

        public PreValidateElcaProjectEntityDeleteUnitTest() {
            this.newProjectId = Guid.NewGuid();
            this.notNewProjectId = Guid.NewGuid();
        }


        [TestMethod]
        public void TestDeleteNotNewProjectEntity()
        {
            //prepare project
            var crmSvc = new CrmServiceClient(ConfigurationManager.ConnectionStrings["CRMOnline"].ConnectionString);
            var target = new elca_Project()
            {
                Id = notNewProjectId,
                elca_ProjectNumber = "PROJ-111",
                elca_name = "Project 1",
                elca_Customer = "Nhan",
                elca_Members = "NTN",
                elca_StartDate = DateTime.Now,
                elca_ProjectGroupId = new EntityReference(elca_ProjectGroup.EntityLogicalName, new Guid("ec55b6c7-e61b-ee11-87d2-0050569fda1a")),
                elca_ProjectStatus = elca_ProjectStatus.Finished,
                StateCode = elca_ProjectState.Active
            };
            crmSvc.Create(target);

            // execute
            Action act = () => crmSvc.Delete(elca_Project.EntityLogicalName, notNewProjectId);
            var ex = Assert.ThrowsException<System.ServiceModel.FaultException<OrganizationServiceFault>>(act);
            //remove test project
            target.elca_ProjectStatus = elca_ProjectStatus.New;
            crmSvc.Update(target);
            crmSvc.Delete(elca_Project.EntityLogicalName, notNewProjectId);
            Assert.AreEqual(ex.Message, "You can only delete new project");
        }

        [TestMethod]
        public void TestDeleteNewProjectEntity()
        {
            //prepare project
            var crmSvc = new CrmServiceClient(ConfigurationManager.ConnectionStrings["CRMOnline"].ConnectionString);
            var target = new elca_Project()
            {
                Id = newProjectId,
                elca_ProjectNumber = "PROJ-112",
                elca_name = "Project 1",
                elca_Customer = "Nhan",
                elca_Members = "NTN",
                elca_StartDate = DateTime.Now,
                elca_ProjectGroupId = new EntityReference(elca_ProjectGroup.EntityLogicalName, new Guid("ec55b6c7-e61b-ee11-87d2-0050569fda1a")),
                elca_ProjectStatus = elca_ProjectStatus.New,
                StateCode = elca_ProjectState.Active
            };
            crmSvc.Create(target);

            // execute
            crmSvc.Delete(elca_Project.EntityLogicalName, newProjectId);


            // Assert that the project record is still present after the plugin execution
            //crmSvc.Retrieve(elca_Project.EntityLogicalName, id, new ColumnSet());
            Action act = () => crmSvc.Retrieve(elca_Project.EntityLogicalName, newProjectId, new ColumnSet());
            var ex = Assert.ThrowsException<System.ServiceModel.FaultException<OrganizationServiceFault>>(act);
            Assert.IsNotNull(ex);
        }
    }

}
