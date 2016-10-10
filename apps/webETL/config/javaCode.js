// 可以在流程中修改的java代码

var sqlToTxtJavaCode = "
public boolean processRow(StepMetaInterface smi, StepDataInterface sdi) throws KettleException
{
    Object[] r = getRow();
    if (r == null) {
        setOutputDone();
        return false;
    }

    if (first)
    {
        first = false;
    }

    // It is always safest to call createOutputRow() to ensure that your output row's Object[] is large
    // enough to handle any new fields you are creating in this step.
    r = createOutputRow(r, outputRowSize);

    /* TODO: Your code here. (See Sample)

     // Get the value from an input field
     String foobar = get(Fields.In, "a_fieldname").getString(r);

     foobar += "bar";

     // Set a value in a new output field
     get(Fields.Out, "output_fieldname").setValue(r, foobar);

     */
    // Send the row on to the next step.
    putRow(data.outputRowMeta, r);

    return true;
}";
