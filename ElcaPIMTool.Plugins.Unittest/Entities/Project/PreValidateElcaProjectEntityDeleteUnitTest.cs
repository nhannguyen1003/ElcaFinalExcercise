using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ElcaPIMTool.ElcaPIMTool.Common.CrmEarlyBound;
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
        private Guid id;

        public PreValidateElcaProjectEntityDeleteUnitTest() {
            this.id = Guid.NewGuid();
        }

        [TestInitialize]
        public void TestInitialize() {
            var crmSvc = new CrmServiceClient(ConfigurationManager.ConnectionStrings["CRMOnline"].ConnectionString);

            // Prepare the project entity

            var target = new elca_Project()
            {
                Id = id,
                elca_ProjectNumber = "PROJ-111",
                elca_name = "Project 1",
                elca_Customer = "Nhan",
                elca_Members = "NTN",
                elca_StartDate = DateTime.Now,
                elca_ProjectGroupId = new EntityReference(elca_ProjectGroup.EntityLogicalName, new Guid("ec55b6c7-e61b-ee11-87d2-0050569fda1a")),
                elca_ProjectStatus = elca_ProjectStatus.New,
                StateCode = elca_ProjectState.Active
            };
            crmSvc.Create(target);
        }

        [TestMethod]
        public void TestDeleteNotNewProjectEntity()
        {
            var crmSvc = new CrmServiceClient(ConfigurationManager.ConnectionStrings["CRMOnline"].ConnectionString);
            // Prepare the project by Updated projectstatus
            elca_Project target = crmSvc.Retrieve(elca_Project.EntityLogicalName, id, new ColumnSet()) as elca_Project;
            target.elca_ProjectStatus = elca_ProjectStatus.Finished;
            crmSvc.Update(target);

            // execute
            Action act = () => crmSvc.Delete(elca_Project.EntityLogicalName, id);
            var ex = Assert.ThrowsException<System.ServiceModel.FaultException<OrganizationServiceFault>>(act);
            Assert.AreEqual(ex.Message, "You can only delete new project");

        }

        [TestMethod]
        public void TestDeleteNewProjectEntity()
        {
            var crmSvc = new CrmServiceClient(ConfigurationManager.ConnectionStrings["CRMOnline"].ConnectionString);
            // execute
            crmSvc.Delete(elca_Project.EntityLogicalName, id);


            // Assert that the project record is still present after the plugin execution
            //crmSvc.Retrieve(elca_Project.EntityLogicalName, id, new ColumnSet());
            Action act = () => crmSvc.Retrieve(elca_Project.EntityLogicalName, id, new ColumnSet());
            var ex = Assert.ThrowsException<System.ServiceModel.FaultException<OrganizationServiceFault>>(act);
            Assert.IsNotNull(ex);

        }


        [TestCleanup]
        public void TestCleanup()
        {
            // Clean up the created record after the test is executed

            var crmSvc = new CrmServiceClient(ConfigurationManager.ConnectionStrings["CRMOnline"].ConnectionString);
            // Prepare the project by Updated projectstatus
            try
            {
                elca_Project target = crmSvc.Retrieve(elca_Project.EntityLogicalName, id, new ColumnSet()) as elca_Project;
                if (target.elca_ProjectStatus != elca_ProjectStatus.New) target.elca_ProjectStatus = elca_ProjectStatus.New;
                crmSvc.Update(target);
                crmSvc.Delete(elca_Project.EntityLogicalName, id);
            }
            catch(Exception e){
            }
        }
    }

}
